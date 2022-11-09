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
  "http://sms-voice.pinpoint.{region}.amazonaws.com",
  "https://sms-voice.pinpoint.{region}.amazonaws.com",
  "http://sms-voice.pinpoint.{region}.amazonaws.com.cn",
  "https://sms-voice.pinpoint.{region}.amazonaws.com.cn",
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

// SDK Documentation: https://docs.aws.amazon.com/pinpoint/ - Amazon Web Services documentation
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
  
  // CreateConfigurationSet - Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
  CreateConfigurationSet(
    req: operations.CreateConfigurationSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConfigurationSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConfigurationSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/sms-voice/configuration-sets";
    
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
        let res: operations.CreateConfigurationSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createConfigurationSetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.alreadyExistsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateConfigurationSetEventDestination - Create a new event destination in a configuration set.
  CreateConfigurationSetEventDestination(
    req: operations.CreateConfigurationSetEventDestinationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateConfigurationSetEventDestinationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateConfigurationSetEventDestinationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", req.pathParams);
    
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
        let res: operations.CreateConfigurationSetEventDestinationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createConfigurationSetEventDestinationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.alreadyExistsException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConfigurationSet - Deletes an existing configuration set.
  DeleteConfigurationSet(
    req: operations.DeleteConfigurationSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConfigurationSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConfigurationSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/sms-voice/configuration-sets/{ConfigurationSetName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConfigurationSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteConfigurationSetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteConfigurationSetEventDestination - Deletes an event destination in a configuration set.
  DeleteConfigurationSetEventDestination(
    req: operations.DeleteConfigurationSetEventDestinationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteConfigurationSetEventDestinationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteConfigurationSetEventDestinationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteConfigurationSetEventDestinationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteConfigurationSetEventDestinationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConfigurationSetEventDestinations - Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
  GetConfigurationSetEventDestinations(
    req: operations.GetConfigurationSetEventDestinationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigurationSetEventDestinationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigurationSetEventDestinationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConfigurationSetEventDestinationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getConfigurationSetEventDestinationsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListConfigurationSets - List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
  ListConfigurationSets(
    req: operations.ListConfigurationSetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListConfigurationSetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListConfigurationSetsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/sms-voice/configuration-sets";
    
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
        let res: operations.ListConfigurationSetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listConfigurationSetsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SendVoiceMessage - Create a new voice message and send it to a recipient's phone number.
  SendVoiceMessage(
    req: operations.SendVoiceMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SendVoiceMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SendVoiceMessageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/sms-voice/voice/message";
    
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
        let res: operations.SendVoiceMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sendVoiceMessageResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateConfigurationSetEventDestination - Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
  UpdateConfigurationSetEventDestination(
    req: operations.UpdateConfigurationSetEventDestinationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateConfigurationSetEventDestinationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateConfigurationSetEventDestinationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}", req.pathParams);
    
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
        let res: operations.UpdateConfigurationSetEventDestinationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateConfigurationSetEventDestinationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceErrorException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
