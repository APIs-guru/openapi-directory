import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://shield.{region}.amazonaws.com",
  "https://shield.{region}.amazonaws.com",
  "http://shield.{region}.amazonaws.com.cn",
  "https://shield.{region}.amazonaws.com.cn",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}

// SDK Documentation: https://docs.aws.amazon.com/shield/ - Amazon Web Services documentation
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // AssociateDrtLogBucket - <p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
  AssociateDrtLogBucket(
    req: operations.AssociateDrtLogBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssociateDrtLogBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssociateDrtLogBucketRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AssociateDrtLogBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.associateDrtLogBucketResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.noAssociatedRoleException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitsExceededException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedForDependencyException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AssociateDrtRole - <p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to the role you will specify in the request. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>. The role must also trust the service principal <code> drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON Policy Elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an Amazon Web Services Service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
  AssociateDrtRole(
    req: operations.AssociateDrtRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssociateDrtRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssociateDrtRoleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.AssociateDRTRole";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AssociateDrtRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.associateDrtRoleResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedForDependencyException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AssociateHealthCheck - <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and mitigation. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
  AssociateHealthCheck(
    req: operations.AssociateHealthCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssociateHealthCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssociateHealthCheckRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AssociateHealthCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.associateHealthCheckResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitsExceededException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AssociateProactiveEngagementDetails - <p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>
  AssociateProactiveEngagementDetails(
    req: operations.AssociateProactiveEngagementDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssociateProactiveEngagementDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssociateProactiveEngagementDetailsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AssociateProactiveEngagementDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.associateProactiveEngagementDetailsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateProtection - <p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.</p> <p>You can add protection to only a single resource with each CreateProtection request. If you want to add protection to multiple resources at once, use the <a href="https://console.aws.amazon.com/waf/">WAF console</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Add Shield Advanced Protection to more Amazon Web Services Resources</a>.</p>
  CreateProtection(
    req: operations.CreateProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProtectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.CreateProtection";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createProtectionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidResourceException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitsExceededException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceAlreadyExistsException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateProtectionGroup - Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
  CreateProtectionGroup(
    req: operations.CreateProtectionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProtectionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProtectionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateProtectionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createProtectionGroupResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceAlreadyExistsException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitsExceededException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSubscription - <p>Activates Shield Advanced for an account.</p> <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
  CreateSubscription(
    req: operations.CreateSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.CreateSubscription";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createSubscriptionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceAlreadyExistsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProtection - Deletes an Shield Advanced <a>Protection</a>.
  DeleteProtection(
    req: operations.DeleteProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProtectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DeleteProtection";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteProtectionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProtectionGroup - Removes the specified protection group.
  DeleteProtectionGroup(
    req: operations.DeleteProtectionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProtectionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProtectionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProtectionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteProtectionGroupResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSubscription - Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 
  DeleteSubscription(
    req: operations.DeleteSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DeleteSubscription";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteSubscriptionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.lockedSubscriptionException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DescribeAttack - Describes the details of a DDoS attack. 
  DescribeAttack(
    req: operations.DescribeAttackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeAttackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeAttackRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DescribeAttack";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DescribeAttackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.describeAttackResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DescribeAttackStatistics - <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>
  DescribeAttackStatistics(
    req: operations.DescribeAttackStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeAttackStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeAttackStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DescribeAttackStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.describeAttackStatisticsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DescribeDrtAccess - Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.
  DescribeDrtAccess(
    req: operations.DescribeDrtAccessRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeDrtAccessResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeDrtAccessRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DescribeDrtAccessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.describeDrtAccessResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DescribeEmergencyContactSettings - A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
  DescribeEmergencyContactSettings(
    req: operations.DescribeEmergencyContactSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeEmergencyContactSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeEmergencyContactSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DescribeEmergencyContactSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.describeEmergencyContactSettingsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DescribeProtection - Lists the details of a <a>Protection</a> object.
  DescribeProtection(
    req: operations.DescribeProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeProtectionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DescribeProtection";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DescribeProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.describeProtectionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DescribeProtectionGroup - Returns the specification for the specified protection group.
  DescribeProtectionGroup(
    req: operations.DescribeProtectionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeProtectionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeProtectionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DescribeProtectionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.describeProtectionGroupResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DescribeSubscription - Provides details about the Shield Advanced subscription for an account.
  DescribeSubscription(
    req: operations.DescribeSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DescribeSubscription";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DescribeSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.describeSubscriptionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisableProactiveEngagement - Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.
  DisableProactiveEngagement(
    req: operations.DisableProactiveEngagementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisableProactiveEngagementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisableProactiveEngagementRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DisableProactiveEngagementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.disableProactiveEngagementResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisassociateDrtLogBucket - <p>Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.</p> <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the SRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
  DisassociateDrtLogBucket(
    req: operations.DisassociateDrtLogBucketRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisassociateDrtLogBucketResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisassociateDrtLogBucketRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DisassociateDrtLogBucketResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.disassociateDrtLogBucketResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.noAssociatedRoleException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedForDependencyException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisassociateDrtRole - <p>Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.</p> <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the SRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
  DisassociateDrtRole(
    req: operations.DisassociateDrtRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisassociateDrtRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisassociateDrtRoleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DisassociateDrtRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.disassociateDrtRoleResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisassociateHealthCheck - <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and mitigation. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
  DisassociateHealthCheck(
    req: operations.DisassociateHealthCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisassociateHealthCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisassociateHealthCheckRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DisassociateHealthCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.disassociateHealthCheckResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // EnableProactiveEngagement - Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
  EnableProactiveEngagement(
    req: operations.EnableProactiveEngagementRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnableProactiveEngagementResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnableProactiveEngagementRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.EnableProactiveEngagementResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.enableProactiveEngagementResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSubscriptionState - Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.
  GetSubscriptionState(
    req: operations.GetSubscriptionStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.GetSubscriptionState";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSubscriptionStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSubscriptionStateResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAttacks - Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
  ListAttacks(
    req: operations.ListAttacksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAttacksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAttacksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.ListAttacks";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAttacksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAttacksResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidOperationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListProtectionGroups - Retrieves the <a>ProtectionGroup</a> objects for the account.
  ListProtectionGroups(
    req: operations.ListProtectionGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListProtectionGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListProtectionGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.ListProtectionGroups";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListProtectionGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listProtectionGroupsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidPaginationTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListProtections - Lists all <a>Protection</a> objects for the account.
  ListProtections(
    req: operations.ListProtectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListProtectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListProtectionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.ListProtections";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListProtectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listProtectionsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidPaginationTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListResourcesInProtectionGroup - Retrieves the resources that are included in the protection group. 
  ListResourcesInProtectionGroup(
    req: operations.ListResourcesInProtectionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListResourcesInProtectionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListResourcesInProtectionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListResourcesInProtectionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listResourcesInProtectionGroupResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidPaginationTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTagsForResource - Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.
  ListTagsForResource(
    req: operations.ListTagsForResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsForResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsForResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.ListTagsForResource";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListTagsForResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTagsForResourceResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidResourceException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TagResource - Adds or updates tags for a resource in Shield.
  TagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.TagResource";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagResourceResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidResourceException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UntagResource - Removes tags from a resource in Shield.
  UntagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.UntagResource";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.untagResourceResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidResourceException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateEmergencyContactSettings - Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
  UpdateEmergencyContactSettings(
    req: operations.UpdateEmergencyContactSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEmergencyContactSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEmergencyContactSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEmergencyContactSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateEmergencyContactSettingsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateProtectionGroup - Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
  UpdateProtectionGroup(
    req: operations.UpdateProtectionGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProtectionGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProtectionGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateProtectionGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateProtectionGroupResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSubscription - Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.
  UpdateSubscription(
    req: operations.UpdateSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=AWSShield_20160616.UpdateSubscription";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSubscriptionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalErrorException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.lockedSubscriptionException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.optimisticLockException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
