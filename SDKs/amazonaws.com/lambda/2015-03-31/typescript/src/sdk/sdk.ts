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
  "http://lambda.{region}.amazonaws.com",
  "https://lambda.{region}.amazonaws.com",
  "http://lambda.{region}.amazonaws.com.cn",
  "https://lambda.{region}.amazonaws.com.cn",
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

// SDK Documentation: https://docs.aws.amazon.com/lambda/ - Amazon Web Services documentation
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
  
  // AddLayerVersionPermission - <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>
  AddLayerVersionPermission(
    req: operations.AddLayerVersionPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddLayerVersionPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddLayerVersionPermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy", req.pathParams);
    
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
        let res: operations.AddLayerVersionPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.addLayerVersionPermissionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.policyLengthExceededException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddPermission - <p>Grants an Amazon Web Services service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. For Amazon Web Services services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This action adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>. </p>
  AddPermission(
    req: operations.AddPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddPermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/policy", req.pathParams);
    
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
        let res: operations.AddPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.addPermissionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.policyLengthExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateAlias - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>
  CreateAlias(
    req: operations.CreateAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/aliases", req.pathParams);
    
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
        let res: operations.CreateAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.aliasConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateCodeSigningConfig - Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail). 
  CreateCodeSigningConfig(
    req: operations.CreateCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2020-04-22/code-signing-configs/";
    
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
        let res: operations.CreateCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createCodeSigningConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateEventSourceMapping - <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and triggers the function.</p> <p>For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Configuring a Dynamo DB stream as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Configuring a Kinesis stream as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Configuring an SQS queue as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Configuring an MQ broker as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Configuring MSK as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Configuring Self-Managed Apache Kafka as an event source</a> </p> </li> </ul> <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p> </li> </ul>
  CreateEventSourceMapping(
    req: operations.CreateEventSourceMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEventSourceMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEventSourceMappingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2015-03-31/event-source-mappings/";
    
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
        let res: operations.CreateEventSourceMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventSourceMappingConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFunction - <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>You set the package type to <code>Image</code> if the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties. </p> <p>You set the package type to <code>Zip</code> if the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function States</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set set of signing profiles, which define the trusted publishers for this function.</p> <p>If another account or an Amazon Web Services service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Functions</a>.</p>
  CreateFunction(
    req: operations.CreateFunctionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFunctionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFunctionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2015-03-31/functions";
    
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
        let res: operations.CreateFunctionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeStorageExceededException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeVerificationFailedException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidCodeSignatureException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeSigningConfigNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAlias - Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
  DeleteAlias(
    req: operations.DeleteAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/aliases/{Name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteCodeSigningConfig - Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it. 
  DeleteCodeSigningConfig(
    req: operations.DeleteCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteCodeSigningConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEventSourceMapping - <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
  DeleteEventSourceMapping(
    req: operations.DeleteEventSourceMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEventSourceMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEventSourceMappingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/event-source-mappings/{UUID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEventSourceMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventSourceMappingConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFunction - <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>
  DeleteFunction(
    req: operations.DeleteFunctionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFunctionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFunctionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFunctionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFunctionCodeSigningConfig - Removes the code signing configuration from the function.
  DeleteFunctionCodeSigningConfig(
    req: operations.DeleteFunctionCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFunctionCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFunctionCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2020-06-30/functions/{FunctionName}/code-signing-config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFunctionCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeSigningConfigNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFunctionConcurrency - Removes a concurrent execution limit from a function.
  DeleteFunctionConcurrency(
    req: operations.DeleteFunctionConcurrencyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFunctionConcurrencyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFunctionConcurrencyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2017-10-31/functions/{FunctionName}/concurrency", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFunctionConcurrencyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFunctionEventInvokeConfig - <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
  DeleteFunctionEventInvokeConfig(
    req: operations.DeleteFunctionEventInvokeConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFunctionEventInvokeConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFunctionEventInvokeConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-25/functions/{FunctionName}/event-invoke-config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFunctionEventInvokeConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteLayerVersion - Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
  DeleteLayerVersion(
    req: operations.DeleteLayerVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLayerVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLayerVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteLayerVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteProvisionedConcurrencyConfig - Deletes the provisioned concurrency configuration for a function.
  DeleteProvisionedConcurrencyConfig(
    req: operations.DeleteProvisionedConcurrencyConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProvisionedConcurrencyConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProvisionedConcurrencyConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteProvisionedConcurrencyConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountSettings - Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.
  GetAccountSettings(
    req: operations.GetAccountSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountSettingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2016-08-19/account-settings/";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountSettingsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAlias - Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
  GetAlias(
    req: operations.GetAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/aliases/{Name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.aliasConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCodeSigningConfig - Returns information about the specified code signing configuration.
  GetCodeSigningConfig(
    req: operations.GetCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCodeSigningConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
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

  
  // GetEventSourceMapping - Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.
  GetEventSourceMapping(
    req: operations.GetEventSourceMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventSourceMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventSourceMappingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/event-source-mappings/{UUID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEventSourceMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventSourceMappingConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFunction - Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
  GetFunction(
    req: operations.GetFunctionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFunctionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFunctionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFunctionCodeSigningConfig - Returns the code signing configuration for the specified function.
  GetFunctionCodeSigningConfig(
    req: operations.GetFunctionCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2020-06-30/functions/{FunctionName}/code-signing-config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFunctionCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFunctionCodeSigningConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFunctionConcurrency - Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.
  GetFunctionConcurrency(
    req: operations.GetFunctionConcurrencyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionConcurrencyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionConcurrencyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-30/functions/{FunctionName}/concurrency", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFunctionConcurrencyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFunctionConcurrencyResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFunctionConfiguration - <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
  GetFunctionConfiguration(
    req: operations.GetFunctionConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/configuration", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFunctionConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetFunctionEventInvokeConfig - <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
  GetFunctionEventInvokeConfig(
    req: operations.GetFunctionEventInvokeConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionEventInvokeConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionEventInvokeConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-25/functions/{FunctionName}/event-invoke-config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetFunctionEventInvokeConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionEventInvokeConfig = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLayerVersion - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
  GetLayerVersion(
    req: operations.GetLayerVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLayerVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLayerVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLayerVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLayerVersionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
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

  
  // GetLayerVersionByArn - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
  GetLayerVersionByArn(
    req: operations.GetLayerVersionByArnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLayerVersionByArnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLayerVersionByArnRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2018-10-31/layers#find=LayerVersion&Arn";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLayerVersionByArnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLayerVersionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
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

  
  // GetLayerVersionPolicy - Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
  GetLayerVersionPolicy(
    req: operations.GetLayerVersionPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLayerVersionPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLayerVersionPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLayerVersionPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLayerVersionPolicyResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPolicy - Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.
  GetPolicy(
    req: operations.GetPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/policy", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPolicyResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProvisionedConcurrencyConfig - Retrieves the provisioned concurrency configuration for a function's alias or version.
  GetProvisionedConcurrencyConfig(
    req: operations.GetProvisionedConcurrencyConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProvisionedConcurrencyConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProvisionedConcurrencyConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProvisionedConcurrencyConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getProvisionedConcurrencyConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.provisionedConcurrencyConfigNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Invoke - <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">Retry Behavior</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limit errors</a>, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if executing the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action.</p>
  Invoke(
    req: operations.InvokeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InvokeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InvokeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/invocations", req.pathParams);
    
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
        let res: operations.InvokeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.invocationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestContentException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.requestTooLargeException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.unsupportedMediaTypeException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.ec2UnexpectedException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.subnetIpAddressLimitReachedException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.eniLimitReachedException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.efsMountConnectivityException = httpRes?.data;
            }
            break;
          case 491:
            if (MatchContentType(contentType, `application/json`)) {
                res.efsMountFailureException = httpRes?.data;
            }
            break;
          case 492:
            if (MatchContentType(contentType, `application/json`)) {
                res.efsMountTimeoutException = httpRes?.data;
            }
            break;
          case 493:
            if (MatchContentType(contentType, `application/json`)) {
                res.efsioException = httpRes?.data;
            }
            break;
          case 494:
            if (MatchContentType(contentType, `application/json`)) {
                res.ec2ThrottledException = httpRes?.data;
            }
            break;
          case 495:
            if (MatchContentType(contentType, `application/json`)) {
                res.ec2AccessDeniedException = httpRes?.data;
            }
            break;
          case 496:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidSubnetIdException = httpRes?.data;
            }
            break;
          case 497:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidSecurityGroupIdException = httpRes?.data;
            }
            break;
          case 498:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidZipFileException = httpRes?.data;
            }
            break;
          case 499:
            if (MatchContentType(contentType, `application/json`)) {
                res.kmsDisabledException = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.kmsInvalidStateException = httpRes?.data;
            }
            break;
          case 501:
            if (MatchContentType(contentType, `application/json`)) {
                res.kmsAccessDeniedException = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.kmsNotFoundException = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRuntimeException = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 505:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotReadyException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // InvokeAsync - <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>
  InvokeAsync(
    req: operations.InvokeAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InvokeAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InvokeAsyncRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2014-11-13/functions/{FunctionName}/invoke-async/", req.pathParams);
    
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
        let res: operations.InvokeAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.invokeAsyncResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestContentException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRuntimeException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAliases - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">aliases</a> for a Lambda function.
  ListAliases(
    req: operations.ListAliasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAliasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAliasesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/aliases", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAliasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAliasesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListCodeSigningConfigs - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. 
  ListCodeSigningConfigs(
    req: operations.ListCodeSigningConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCodeSigningConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCodeSigningConfigsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2020-04-22/code-signing-configs/";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListCodeSigningConfigsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listCodeSigningConfigsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEventSourceMappings - Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a single event source.
  ListEventSourceMappings(
    req: operations.ListEventSourceMappingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventSourceMappingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventSourceMappingsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2015-03-31/event-source-mappings/";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListEventSourceMappingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEventSourceMappingsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFunctionEventInvokeConfigs - <p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
  ListFunctionEventInvokeConfigs(
    req: operations.ListFunctionEventInvokeConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFunctionEventInvokeConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFunctionEventInvokeConfigsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-25/functions/{FunctionName}/event-invoke-config/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFunctionEventInvokeConfigsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFunctionEventInvokeConfigsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFunctions - <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version. </p> <note> <p>The <code>ListFunctions</code> action returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode) for a function or version, use <a>GetFunction</a>.</p> </note>
  ListFunctions(
    req: operations.ListFunctionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFunctionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFunctionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2015-03-31/functions/";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFunctionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFunctionsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFunctionsByCodeSigningConfig - List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.
  ListFunctionsByCodeSigningConfig(
    req: operations.ListFunctionsByCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFunctionsByCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFunctionsByCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFunctionsByCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFunctionsByCodeSigningConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
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

  
  // ListLayerVersions - Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime.
  ListLayerVersions(
    req: operations.ListLayerVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListLayerVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListLayerVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2018-10-31/layers/{LayerName}/versions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListLayerVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listLayerVersionsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListLayers - Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime.
  ListLayers(
    req: operations.ListLayersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListLayersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListLayersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/2018-10-31/layers";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListLayersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listLayersResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListProvisionedConcurrencyConfigs - Retrieves a list of provisioned concurrency configurations for a function.
  ListProvisionedConcurrencyConfigs(
    req: operations.ListProvisionedConcurrencyConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListProvisionedConcurrencyConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListProvisionedConcurrencyConfigsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-30/functions/{FunctionName}/provisioned-concurrency#List=ALL", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListProvisionedConcurrencyConfigsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listProvisionedConcurrencyConfigsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTags - Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.
  ListTags(
    req: operations.ListTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2017-03-31/tags/{ARN}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTagsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListVersionsByFunction - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.
  ListVersionsByFunction(
    req: operations.ListVersionsByFunctionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVersionsByFunctionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVersionsByFunctionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/versions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListVersionsByFunctionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listVersionsByFunctionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PublishLayerVersion - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
  PublishLayerVersion(
    req: operations.PublishLayerVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PublishLayerVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PublishLayerVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2018-10-31/layers/{LayerName}/versions", req.pathParams);
    
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
        let res: operations.PublishLayerVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.publishLayerVersionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeStorageExceededException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PublishVersion - <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
  PublishVersion(
    req: operations.PublishVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PublishVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PublishVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/versions", req.pathParams);
    
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
        let res: operations.PublishVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeStorageExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutFunctionCodeSigningConfig - Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 
  PutFunctionCodeSigningConfig(
    req: operations.PutFunctionCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutFunctionCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutFunctionCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2020-06-30/functions/{FunctionName}/code-signing-config", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutFunctionCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.putFunctionCodeSigningConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeSigningConfigNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutFunctionConcurrency - <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
  PutFunctionConcurrency(
    req: operations.PutFunctionConcurrencyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutFunctionConcurrencyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutFunctionConcurrencyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2017-10-31/functions/{FunctionName}/concurrency", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutFunctionConcurrencyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.concurrency = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutFunctionEventInvokeConfig - <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>
  PutFunctionEventInvokeConfig(
    req: operations.PutFunctionEventInvokeConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutFunctionEventInvokeConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutFunctionEventInvokeConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-25/functions/{FunctionName}/event-invoke-config", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutFunctionEventInvokeConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionEventInvokeConfig = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutProvisionedConcurrencyConfig - Adds a provisioned concurrency configuration to a function's alias or version.
  PutProvisionedConcurrencyConfig(
    req: operations.PutProvisionedConcurrencyConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutProvisionedConcurrencyConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutProvisionedConcurrencyConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-30/functions/{FunctionName}/provisioned-concurrency#Qualifier", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutProvisionedConcurrencyConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.putProvisionedConcurrencyConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveLayerVersionPermission - Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
  RemoveLayerVersionPermission(
    req: operations.RemoveLayerVersionPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveLayerVersionPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveLayerVersionPermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemoveLayerVersionPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemovePermission - Revokes function-use permission from an Amazon Web Services service or another account. You can get the ID of the statement from the output of <a>GetPolicy</a>.
  RemovePermission(
    req: operations.RemovePermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemovePermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemovePermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/policy/{StatementId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemovePermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TagResource - Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.
  TagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2017-03-31/tags/{ARN}", req.pathParams);
    
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
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UntagResource - Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.
  UntagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2017-03-31/tags/{ARN}#tagKeys", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateAlias - Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
  UpdateAlias(
    req: operations.UpdateAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateAliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/aliases/{Name}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.aliasConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateCodeSigningConfig - Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function. 
  UpdateCodeSigningConfig(
    req: operations.UpdateCodeSigningConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCodeSigningConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCodeSigningConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateCodeSigningConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateCodeSigningConfigResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
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

  
  // UpdateEventSourceMapping - <p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p> </li> </ul>
  UpdateEventSourceMapping(
    req: operations.UpdateEventSourceMappingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEventSourceMappingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEventSourceMappingRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/event-source-mappings/{UUID}", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEventSourceMappingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 202:
            if (MatchContentType(contentType, `application/json`)) {
                res.eventSourceMappingConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateFunctionCode - <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">Configuring code signing</a>.</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>
  UpdateFunctionCode(
    req: operations.UpdateFunctionCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFunctionCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFunctionCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/code", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateFunctionCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeStorageExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeVerificationFailedException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidCodeSignatureException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeSigningConfigNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateFunctionConfiguration - <p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function States</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an account or Amazon Web Services service, use <a>AddPermission</a>.</p>
  UpdateFunctionConfiguration(
    req: operations.UpdateFunctionConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFunctionConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFunctionConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2015-03-31/functions/{FunctionName}/configuration", req.pathParams);
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateFunctionConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionConfiguration = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeVerificationFailedException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidCodeSignatureException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.codeSigningConfigNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateFunctionEventInvokeConfig - <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
  UpdateFunctionEventInvokeConfig(
    req: operations.UpdateFunctionEventInvokeConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFunctionEventInvokeConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFunctionEventInvokeConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/2019-09-25/functions/{FunctionName}/event-invoke-config", req.pathParams);
    
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
        let res: operations.UpdateFunctionEventInvokeConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.functionEventInvokeConfig = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.serviceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidParameterValueException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceConflictException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
