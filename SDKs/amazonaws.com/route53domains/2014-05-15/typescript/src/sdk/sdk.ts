import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://route53domains.{region}.amazonaws.com",
	"https://route53domains.{region}.amazonaws.com",
	"http://route53domains.{region}.amazonaws.com.cn",
	"https://route53domains.{region}.amazonaws.com.cn",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}

/* SDK Documentation: https://docs.aws.amazon.com/route53domains/ - Amazon Web Services documentation*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * acceptDomainTransferFromAnotherAwsAccount - <p>Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
  **/
  acceptDomainTransferFromAnotherAwsAccount(
    req: operations.AcceptDomainTransferFromAnotherAwsAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AcceptDomainTransferFromAnotherAwsAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AcceptDomainTransferFromAnotherAwsAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AcceptDomainTransferFromAnotherAwsAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.acceptDomainTransferFromAnotherAwsAccountResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.domainLimitExceeded = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelDomainTransferToAnotherAwsAccount - <p>Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other AWS account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
  **/
  cancelDomainTransferToAnotherAwsAccount(
    req: operations.CancelDomainTransferToAnotherAwsAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelDomainTransferToAnotherAwsAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelDomainTransferToAnotherAwsAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelDomainTransferToAnotherAwsAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancelDomainTransferToAnotherAwsAccountResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * checkDomainAvailability - This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
  **/
  checkDomainAvailability(
    req: operations.CheckDomainAvailabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckDomainAvailabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckDomainAvailabilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CheckDomainAvailabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.checkDomainAvailabilityResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * checkDomainTransferability - Checks whether a domain name can be transferred to Amazon Route 53. 
  **/
  checkDomainTransferability(
    req: operations.CheckDomainTransferabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckDomainTransferabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckDomainTransferabilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CheckDomainTransferabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.checkDomainTransferabilityResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTagsForDomain - <p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
  **/
  deleteTagsForDomain(
    req: operations.DeleteTagsForDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTagsForDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTagsForDomainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTagsForDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteTagsForDomainResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disableDomainAutoRenew - This operation disables automatic renewal of domain registration for the specified domain.
  **/
  disableDomainAutoRenew(
    req: operations.DisableDomainAutoRenewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisableDomainAutoRenewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisableDomainAutoRenewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DisableDomainAutoRenewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disableDomainAutoRenewResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * disableDomainTransferLock - This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
  **/
  disableDomainTransferLock(
    req: operations.DisableDomainTransferLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisableDomainTransferLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisableDomainTransferLockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DisableDomainTransferLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.disableDomainTransferLockResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enableDomainAutoRenew - <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>
  **/
  enableDomainAutoRenew(
    req: operations.EnableDomainAutoRenewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnableDomainAutoRenewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnableDomainAutoRenewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnableDomainAutoRenewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enableDomainAutoRenewResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enableDomainTransferLock - This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
  **/
  enableDomainTransferLock(
    req: operations.EnableDomainTransferLockRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnableDomainTransferLockResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnableDomainTransferLockRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnableDomainTransferLockResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enableDomainTransferLockResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContactReachabilityStatus - <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
  **/
  getContactReachabilityStatus(
    req: operations.GetContactReachabilityStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContactReachabilityStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContactReachabilityStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContactReachabilityStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getContactReachabilityStatusResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDomainDetail - This operation returns detailed information about a specified domain that is associated with the current AWS account. Contact information for the domain is also returned as part of the output.
  **/
  getDomainDetail(
    req: operations.GetDomainDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomainDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomainDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDomainDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDomainDetailResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDomainSuggestions - The GetDomainSuggestions operation returns a list of suggested domain names.
  **/
  getDomainSuggestions(
    req: operations.GetDomainSuggestionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDomainSuggestionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDomainSuggestionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDomainSuggestionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDomainSuggestionsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOperationDetail - This operation returns the current status of an operation that is not completed.
  **/
  getOperationDetail(
    req: operations.GetOperationDetailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOperationDetailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOperationDetailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOperationDetailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOperationDetailResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDomains - This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.
  **/
  listDomains(
    req: operations.ListDomainsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDomainsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDomainsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.ListDomains";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListDomainsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDomainsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listOperations - Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. 
  **/
  listOperations(
    req: operations.ListOperationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListOperationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListOperationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.ListOperations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListOperationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listOperationsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTagsForDomain - <p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
  **/
  listTagsForDomain(
    req: operations.ListTagsForDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsForDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsForDomainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTagsForDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTagsForDomainResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * registerDomain - <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your AWS account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
  **/
  registerDomain(
    req: operations.RegisterDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RegisterDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RegisterDomainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.RegisterDomain";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RegisterDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.registerDomainResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.domainLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * rejectDomainTransferFromAnotherAwsAccount - <p>Rejects the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
  **/
  rejectDomainTransferFromAnotherAwsAccount(
    req: operations.RejectDomainTransferFromAnotherAwsAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RejectDomainTransferFromAnotherAwsAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RejectDomainTransferFromAnotherAwsAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RejectDomainTransferFromAnotherAwsAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rejectDomainTransferFromAnotherAwsAccountResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * renewDomain - <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
  **/
  renewDomain(
    req: operations.RenewDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RenewDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RenewDomainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.RenewDomain";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RenewDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.renewDomainResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * resendContactReachabilityEmail - For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
  **/
  resendContactReachabilityEmail(
    req: operations.ResendContactReachabilityEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResendContactReachabilityEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResendContactReachabilityEmailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ResendContactReachabilityEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resendContactReachabilityEmailResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * retrieveDomainAuthCode - This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
  **/
  retrieveDomainAuthCode(
    req: operations.RetrieveDomainAuthCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveDomainAuthCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveDomainAuthCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveDomainAuthCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.retrieveDomainAuthCodeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * transferDomain - <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one AWS account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
  **/
  transferDomain(
    req: operations.TransferDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TransferDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TransferDomainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.TransferDomain";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TransferDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.transferDomainResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.domainLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * transferDomainToAnotherAwsAccount - <p>Transfers a domain from the current AWS account to another AWS account. Note the following:</p> <ul> <li> <p>The AWS account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different AWS Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
  **/
  transferDomainToAnotherAwsAccount(
    req: operations.TransferDomainToAnotherAwsAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TransferDomainToAnotherAwsAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TransferDomainToAnotherAwsAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TransferDomainToAnotherAwsAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.transferDomainToAnotherAwsAccountResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDomainContact - <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
  **/
  updateDomainContact(
    req: operations.UpdateDomainContactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDomainContactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDomainContactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateDomainContactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDomainContactResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDomainContactPrivacy - <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>
  **/
  updateDomainContactPrivacy(
    req: operations.UpdateDomainContactPrivacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDomainContactPrivacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDomainContactPrivacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateDomainContactPrivacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDomainContactPrivacyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDomainNameservers - <p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
  **/
  updateDomainNameservers(
    req: operations.UpdateDomainNameserversRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDomainNameserversResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDomainNameserversRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateDomainNameserversResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateDomainNameserversResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.duplicateRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tldRulesViolation = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateTagsForDomain - <p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
  **/
  updateTagsForDomain(
    req: operations.UpdateTagsForDomainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTagsForDomainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTagsForDomainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTagsForDomainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateTagsForDomainResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsupportedTld = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * viewBilling - Returns all the domain-related billing records for the current AWS account for a specified period
  **/
  viewBilling(
    req: operations.ViewBillingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ViewBillingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ViewBillingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=Route53Domains_v20140515.ViewBilling";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ViewBillingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.viewBillingResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.invalidInput = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
