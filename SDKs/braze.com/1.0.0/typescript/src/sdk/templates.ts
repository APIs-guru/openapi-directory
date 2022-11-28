import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Templates {
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
   * listAvailableContentBlocks - List Available Content Blocks
   *
   * This endpoint will list existing Content Block information.
   * 
   * ### Successful Response Properties
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR_REST_API_KEY
   * {
   *   "count": "integer",
   *   "content_blocks": [
   *     {
   *       "content_block_id": "string",
   *       "name": "string",
   *       "content_type": "html or text",
   *       "liquid_tag": "string",
   *       "inclusion_count" : "integer",
   *       "created_at": "time-in-iso",
   *       "last_edited": "time-in-iso",
   *       "tags" : "array of strings"
   *     }
   *   ]
   * }
   * ```
   * 
   * ### Possible Errors
   * - `Modified after time is invalid.`
   * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
   * 
   * - `Modified before time is invalid.`
   * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
   * 
   * - `Modified after time must be earlier than or the same as modified before time.`
   * 
   * - `Content Block number limit is invalid.`
   * The `limit` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Content Block number limit must be greater than 0.`
   * The `limit` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Content Block number limit exceeds maximum of 1000.`
   * The `limit` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Offset is invalid.`
   * The `offset` parameter must be an integer (positive number) greater than 0.
   * 
   * - `Offset must be greater than 0.`
   * The `offset` parameter must be an integer (positive number) greater than 0.
  **/
  listAvailableContentBlocks(
    req: operations.ListAvailableContentBlocksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAvailableContentBlocksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAvailableContentBlocksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/content_blocks/list";
    
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
        const res: operations.ListAvailableContentBlocksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
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
   * seeContentBlockInformation - See Content Block Information
   *
   * This endpoint will call information for an existing Content Block.
   * 
   * ### Successful Response Properties
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR_REST_API_KEY
   * {
   *   "content_block_id": "string",
   *   "name": "string",
   *   "content": "string",
   *   "description": "string",
   *   "content_type": "html or text",
   *   "tags":  "array of strings",
   *   "created_at": "time-in-iso",
   *   "last_edited": "time-in-iso",
   *   "inclusion_count" : "integer",
   *   "message": "success"
   * }
   * ```
   * 
   * ### Possible Errors
   * - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
   * 
   * - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
   * 
   * - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
   * 
   * - `Include Inclusion Data - error` - One of true or false is not provided.
  **/
  seeContentBlockInformation(
    req: operations.SeeContentBlockInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeeContentBlockInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeeContentBlockInformationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/content_blocks/info";
    
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
        const res: operations.SeeContentBlockInformationResponse = {statusCode: httpRes.status, contentType: contentType};
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
