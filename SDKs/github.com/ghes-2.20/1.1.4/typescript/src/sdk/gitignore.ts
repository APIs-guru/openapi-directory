import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Gitignore {
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
   * gitignoreGetAllTemplates - Get all gitignore templates
   *
   * List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-for-the-authenticated-user).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/gitignore#get-all-gitignore-templates - API method documentation
  **/
  gitignoreGetAllTemplates(
    config?: AxiosRequestConfig
  ): Promise<operations.GitignoreGetAllTemplatesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/gitignore/templates";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GitignoreGetAllTemplatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gitignoreGetAllTemplates200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * gitignoreGetTemplate - Get a gitignore template
   *
   * The API also allows fetching the source of a single template.
   * Use the raw [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/) to get the raw contents.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/gitignore#get-a-gitignore-template - API method documentation
  **/
  gitignoreGetTemplate(
    req: operations.GitignoreGetTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GitignoreGetTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GitignoreGetTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/gitignore/templates/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GitignoreGetTemplateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gitignoreTemplate = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
