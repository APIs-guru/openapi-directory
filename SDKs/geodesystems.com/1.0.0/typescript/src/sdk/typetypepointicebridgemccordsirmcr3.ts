import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class TypeTypePointIcebridgeMccordsIrmcr3 {
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
   * searchTypePointIcebridgeMccordsIrmcr3 - Search API for 'McCords Irmcr3 Data' entry type
   *
   * API to search for entries of type McCords Irmcr3 Data
  **/
  searchTypePointIcebridgeMccordsIrmcr3(
    req: operations.SearchTypePointIcebridgeMccordsIrmcr3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchTypePointIcebridgeMccordsIrmcr3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchTypePointIcebridgeMccordsIrmcr3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repository/search/type/type_point_icebridge_mccords_irmcr3";
    
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
        const res: operations.SearchTypePointIcebridgeMccordsIrmcr3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
