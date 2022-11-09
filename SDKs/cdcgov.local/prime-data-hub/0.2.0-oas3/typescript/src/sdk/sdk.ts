import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromResponse} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://cdcgov.local",
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
  
  // DeleteSettingsOrganizationsOrganizationName - Delete an organization (and the associated receivers and senders)
  DeleteSettingsOrganizationsOrganizationName(
    req: operations.DeleteSettingsOrganizationsOrganizationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingsOrganizationsOrganizationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingsOrganizationsOrganizationNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSettingsOrganizationsOrganizationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSettingsOrganizationsOrganizationNameReceiversReceiverName - Delete a receiver
  DeleteSettingsOrganizationsOrganizationNameReceiversReceiverName(
    req: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/receivers/{receiverName}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSettingsOrganizationsOrganizationNameSendersSenderName - Delete a sender
  DeleteSettingsOrganizationsOrganizationNameSendersSenderName(
    req: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/senders/{senderName}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sender = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsOrganizations - The settings for all organizations of the system. Must have admin access.
  GetSettingsOrganizations(
    req: operations.GetSettingsOrganizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/settings/organizations";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.organizations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsOrganizationsOrganizationName - A single organization settings
  GetSettingsOrganizationsOrganizationName(
    req: operations.GetSettingsOrganizationsOrganizationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsOrganizationsOrganizationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsOrganizationsOrganizationNameReceivers - A list of receivers and their current settings
  GetSettingsOrganizationsOrganizationNameReceivers(
    req: operations.GetSettingsOrganizationsOrganizationNameReceiversRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameReceiversRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/receivers", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsOrganizationsOrganizationNameReceiversResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.receivers = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsOrganizationsOrganizationNameReceiversReceiverName - The settings of a single of receiver
  GetSettingsOrganizationsOrganizationNameReceiversReceiverName(
    req: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/receivers/{receiverName}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsOrganizationsOrganizationNameSenders - A list of senders
  GetSettingsOrganizationsOrganizationNameSenders(
    req: operations.GetSettingsOrganizationsOrganizationNameSendersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameSendersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/senders", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsOrganizationsOrganizationNameSendersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.senders = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSettingsOrganizationsOrganizationNameSendersSenderName - The settings of a single of sender
  GetSettingsOrganizationsOrganizationNameSendersSenderName(
    req: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/senders/{senderName}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.sender = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // HeadSettingsOrganizations - Retrived the last modified for all settings of the system. Must have admin access.
  HeadSettingsOrganizations(
    req: operations.HeadSettingsOrganizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HeadSettingsOrganizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HeadSettingsOrganizationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/settings/organizations";
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .head(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HeadSettingsOrganizationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: GetHeadersFromResponse(httpRes.headers)};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostReports - Post a report to the data hub
  PostReports(
    req: operations.PostReportsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostReportsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostReportsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/reports";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostReportsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSettingsOrganizationsOrganizationName - Create or update the direct settings associated with an organization
  PutSettingsOrganizationsOrganizationName(
    req: operations.PutSettingsOrganizationsOrganizationNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSettingsOrganizationsOrganizationNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSettingsOrganizationsOrganizationNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSettingsOrganizationsOrganizationNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.organization = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSettingsOrganizationsOrganizationNameReceiversReceiverName - Update a single reciever
  PutSettingsOrganizationsOrganizationNameReceiversReceiverName(
    req: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/receivers/{receiverName}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.receiver = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSettingsOrganizationsOrganizationNameSendersSenderName - Update a single sender
  PutSettingsOrganizationsOrganizationNameSendersSenderName(
    req: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/settings/organizations/{organizationName}/senders/{senderName}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.senders = httpRes?.data;
            }
            break;
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.senders = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
