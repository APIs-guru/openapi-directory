import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class EmailTemplates {
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
   * listAvailableEmailTemplates - List Available Email Templates
   *
   * Use this endpoint to get a list of available templates in your Braze account.
   * 
   * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
   * 
   * ### Successful Response Properties
   * ```json
   * {
   *   "count": number of templates returned
   *   "templates": [template with the following properties]:
   *     "email_template_id": (string) your email template's API Identifier,
   *     "template_name": (string) the name of your email template,
   *     "created_at": (string, in ISO 8601),
   *     "updated_at": (string, in ISO 8601),
   *     "tags": (array of strings) tags appended to the template
   * }
   *   ```
  **/
  listAvailableEmailTemplates(
    req: operations.ListAvailableEmailTemplatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailableEmailTemplatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailableEmailTemplatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/templates/email/list";
    
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
        const res: operations.ListAvailableEmailTemplatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * seeEmailTemplateInformation - See Email Template Information
   *
   * Use to get information on your email templates.
   * 
   * Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
   * 
   * ### Request Components
   * - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
  **/
  seeEmailTemplateInformation(
    req: operations.SeeEmailTemplateInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeeEmailTemplateInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeeEmailTemplateInformationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/templates/email/info";
    
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
        const res: operations.SeeEmailTemplateInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
