import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Projects {
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
   * assuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove - Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.
  **/
  assuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMove(
    req: operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{project}/{target}:analyzeWorkloadMove", req.pathParams);
    
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
        const res: operations.AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
