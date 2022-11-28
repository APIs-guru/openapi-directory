import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Partners {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * androiddeviceprovisioningPartnersCustomersCreate - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
  **/
  androiddeviceprovisioningPartnersCustomersCreate(
    req: operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/customers", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.company = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersCustomersList - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
  **/
  androiddeviceprovisioningPartnersCustomersList(
    req: operations.AndroiddeviceprovisioningPartnersCustomersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersCustomersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersCustomersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/customers", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AndroiddeviceprovisioningPartnersCustomersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCustomersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesClaim - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
  **/
  androiddeviceprovisioningPartnersDevicesClaim(
    req: operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/devices:claim", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.claimDeviceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesClaimAsync - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
  **/
  androiddeviceprovisioningPartnersDevicesClaimAsync(
    req: operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/devices:claimAsync", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesFindByIdentifier - Finds devices by hardware identifiers, such as IMEI.
  **/
  androiddeviceprovisioningPartnersDevicesFindByIdentifier(
    req: operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/devices:findByIdentifier", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.findDevicesByDeviceIdentifierResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesFindByOwner - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
  **/
  androiddeviceprovisioningPartnersDevicesFindByOwner(
    req: operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/devices:findByOwner", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.findDevicesByOwnerResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesGet - Gets a device.
  **/
  androiddeviceprovisioningPartnersDevicesGet(
    req: operations.AndroiddeviceprovisioningPartnersDevicesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AndroiddeviceprovisioningPartnersDevicesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.device = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesMetadata - Updates reseller metadata associated with the device. Android devices only.
  **/
  androiddeviceprovisioningPartnersDevicesMetadata(
    req: operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceMetadata = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesUnclaim - Unclaims a device from a customer and removes it from zero-touch enrollment.
  **/
  androiddeviceprovisioningPartnersDevicesUnclaim(
    req: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/devices:unclaim", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesUnclaimAsync - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
  **/
  androiddeviceprovisioningPartnersDevicesUnclaimAsync(
    req: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/devices:unclaimAsync", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
  **/
  androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync(
    req: operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/partners/{partnerId}/devices:updateMetadataAsync", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersVendorsCustomersList - Lists the customers of the vendor.
  **/
  androiddeviceprovisioningPartnersVendorsCustomersList(
    req: operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/customers", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listVendorCustomersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androiddeviceprovisioningPartnersVendorsList - Lists the vendors of the partner.
  **/
  androiddeviceprovisioningPartnersVendorsList(
    req: operations.AndroiddeviceprovisioningPartnersVendorsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroiddeviceprovisioningPartnersVendorsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroiddeviceprovisioningPartnersVendorsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/vendors", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AndroiddeviceprovisioningPartnersVendorsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listVendorsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
