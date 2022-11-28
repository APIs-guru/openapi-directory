import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://change.local",
	"https://{defaultHost}",
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


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
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
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * getApiV1DonationsCarbonCalculate - Calculate shipping carbon offset
   *
   * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
  **/
  getApiV1DonationsCarbonCalculate(
    req: operations.GetApiV1DonationsCarbonCalculateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1DonationsCarbonCalculateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1DonationsCarbonCalculateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/donations/carbon_calculate";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetApiV1DonationsCarbonCalculateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiV1DonationsCarbonStats - Retrieve carbon offset stats
   *
   * Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.
  **/
  getApiV1DonationsCarbonStats(
    req: operations.GetApiV1DonationsCarbonStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1DonationsCarbonStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1DonationsCarbonStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/donations/carbon_stats";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetApiV1DonationsCarbonStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiV1DonationsCryptoCalculate - Calculate crypto carbon offset
   *
   * Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
  **/
  getApiV1DonationsCryptoCalculate(
    req: operations.GetApiV1DonationsCryptoCalculateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1DonationsCryptoCalculateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1DonationsCryptoCalculateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/donations/crypto_calculate";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetApiV1DonationsCryptoCalculateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiV1DonationsIndex - List your donations
   *
   * Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.
  **/
  getApiV1DonationsIndex(
    req: operations.GetApiV1DonationsIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1DonationsIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1DonationsIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/donations/index";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetApiV1DonationsIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiV1DonationsShow - Retrieve a donation
   *
   * Retrieves the details of a donation you've previously made.
  **/
  getApiV1DonationsShow(
    req: operations.GetApiV1DonationsShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1DonationsShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1DonationsShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/donations/show";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetApiV1DonationsShowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiV1NonprofitsList - Search a nonprofit
   *
   * Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.
  **/
  getApiV1NonprofitsList(
    req: operations.GetApiV1NonprofitsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1NonprofitsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1NonprofitsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/nonprofits/list";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetApiV1NonprofitsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getApiV1NonprofitsShow - Show a nonprofit
   *
   * Retrieves information for a nonprofit.
  **/
  getApiV1NonprofitsShow(
    req: operations.GetApiV1NonprofitsShowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV1NonprofitsShowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV1NonprofitsShowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/nonprofits/show";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetApiV1NonprofitsShowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postApiV1DonationsCreate - Create a donation
   *
   * Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.
  **/
  postApiV1DonationsCreate(
    req: operations.PostApiV1DonationsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostApiV1DonationsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostApiV1DonationsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/donations/create";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostApiV1DonationsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
