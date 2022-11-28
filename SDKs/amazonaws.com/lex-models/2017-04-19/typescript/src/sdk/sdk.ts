import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://models.lex.{region}.amazonaws.com",
	"https://models.lex.{region}.amazonaws.com",
	"http://models.lex.{region}.amazonaws.com.cn",
	"https://models.lex.{region}.amazonaws.com.cn",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}

/* SDK Documentation: https://docs.aws.amazon.com/lex/ - Amazon Web Services documentation*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * createBotVersion - <p>Creates a new version of the bot based on the <code>$LATEST</code> version. If the <code>$LATEST</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.</p> <note> <p>You can update only the <code>$LATEST</code> version of the bot. You can't update the numbered versions that you create with the <code>CreateBotVersion</code> operation.</p> </note> <p> When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p> This operation requires permission for the <code>lex:CreateBotVersion</code> action. </p>
  **/
  createBotVersion(
    req: operations.CreateBotVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBotVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBotVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{name}/versions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateBotVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createBotVersionResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createIntentVersion - <p>Creates a new version of an intent based on the <code>$LATEST</code> version of the intent. If the <code>$LATEST</code> version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created.</p> <note> <p>You can update only the <code>$LATEST</code> version of the intent. You can't update the numbered versions that you create with the <code>CreateIntentVersion</code> operation.</p> </note> <p> When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions to perform the <code>lex:CreateIntentVersion</code> action. </p>
  **/
  createIntentVersion(
    req: operations.CreateIntentVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIntentVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIntentVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intents/{name}/versions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateIntentVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createIntentVersionResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createSlotTypeVersion - <p>Creates a new version of a slot type based on the <code>$LATEST</code> version of the specified slot type. If the <code>$LATEST</code> version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. </p> <note> <p>You can update only the <code>$LATEST</code> version of a slot type. You can't update the numbered versions that you create with the <code>CreateSlotTypeVersion</code> operation.</p> </note> <p>When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions for the <code>lex:CreateSlotTypeVersion</code> action.</p>
  **/
  createSlotTypeVersion(
    req: operations.CreateSlotTypeVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSlotTypeVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSlotTypeVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/slottypes/{name}/versions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateSlotTypeVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createSlotTypeVersionResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBot - <p>Deletes all versions of the bot, including the <code>$LATEST</code> version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation. The <code>DeleteBot</code> operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later.</p> <p>Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the <a>DeleteUtterances</a> operation.</p> <p>If a bot has an alias, you can't delete it. Instead, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the <code>DeleteBot</code> operation is successful.</p> <p>This operation requires permissions for the <code>lex:DeleteBot</code> action.</p>
  **/
  deleteBot(
    req: operations.DeleteBotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBotRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBotResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBotAlias - <p>Deletes an alias for the specified bot. </p> <p>You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the <code>DeleteBotAlias</code> operation is successful.</p>
  **/
  deleteBotAlias(
    req: operations.DeleteBotAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBotAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBotAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/aliases/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBotAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBotChannelAssociation - <p>Deletes the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permission for the <code>lex:DeleteBotChannelAssociation</code> action.</p>
  **/
  deleteBotChannelAssociation(
    req: operations.DeleteBotChannelAssociationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBotChannelAssociationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBotChannelAssociationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/aliases/{aliasName}/channels/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBotChannelAssociationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteBotVersion - <p>Deletes a specific version of a bot. To delete all versions of a bot, use the <a>DeleteBot</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteBotVersion</code> action.</p>
  **/
  deleteBotVersion(
    req: operations.DeleteBotVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBotVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBotVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{name}/versions/{version}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBotVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteIntent - <p>Deletes all versions of the intent, including the <code>$LATEST</code> version. To delete a specific version of the intent, use the <a>DeleteIntentVersion</a> operation.</p> <p> You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see <a>how-it-works</a>), you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to <code>DeleteIntent</code> is successful. </p> </note> <p> This operation requires permission for the <code>lex:DeleteIntent</code> action. </p>
  **/
  deleteIntent(
    req: operations.DeleteIntentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIntentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIntentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intents/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteIntentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteIntentVersion - <p>Deletes a specific version of an intent. To delete all versions of a intent, use the <a>DeleteIntent</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteIntentVersion</code> action.</p>
  **/
  deleteIntentVersion(
    req: operations.DeleteIntentVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteIntentVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteIntentVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intents/{name}/versions/{version}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteIntentVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSlotType - <p>Deletes all versions of the slot type, including the <code>$LATEST</code> version. To delete a specific version of the slot type, use the <a>DeleteSlotTypeVersion</a> operation.</p> <p> You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the <code>DeleteSlotType</code> call is successful. </p> </note> <p>This operation requires permission for the <code>lex:DeleteSlotType</code> action.</p>
  **/
  deleteSlotType(
    req: operations.DeleteSlotTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSlotTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSlotTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/slottypes/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSlotTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSlotTypeVersion - <p>Deletes a specific version of a slot type. To delete all versions of a slot type, use the <a>DeleteSlotType</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteSlotTypeVersion</code> action.</p>
  **/
  deleteSlotTypeVersion(
    req: operations.DeleteSlotTypeVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSlotTypeVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSlotTypeVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/slottypes/{name}/version/{version}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSlotTypeVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUtterances - <p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete stored utterances for a specific user. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>GetUtterancesView</code> operation are deleted after 15 days.</p> <p>This operation requires permissions for the <code>lex:DeleteUtterances</code> action.</p>
  **/
  deleteUtterances(
    req: operations.DeleteUtterancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUtterancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUtterancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/utterances/{userId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUtterancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBot - <p>Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. </p> <p> This operation requires permissions for the <code>lex:GetBot</code> action. </p>
  **/
  getBot(
    req: operations.GetBotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBotRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{name}/versions/{versionoralias}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBotResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBotResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBotAlias - <p>Returns information about an Amazon Lex bot alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:GetBotAlias</code> action.</p>
  **/
  getBotAlias(
    req: operations.GetBotAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBotAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBotAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/aliases/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBotAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBotAliasResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBotAliases - <p>Returns a list of aliases for a specified Amazon Lex bot.</p> <p>This operation requires permissions for the <code>lex:GetBotAliases</code> action.</p>
  **/
  getBotAliases(
    req: operations.GetBotAliasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBotAliasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBotAliasesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/aliases/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBotAliasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBotAliasesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBotChannelAssociation - <p>Returns information about the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permissions for the <code>lex:GetBotChannelAssociation</code> action.</p>
  **/
  getBotChannelAssociation(
    req: operations.GetBotChannelAssociationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBotChannelAssociationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBotChannelAssociationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/aliases/{aliasName}/channels/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBotChannelAssociationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBotChannelAssociationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBotChannelAssociations - <p> Returns a list of all of the channels associated with the specified bot. </p> <p>The <code>GetBotChannelAssociations</code> operation requires permissions for the <code>lex:GetBotChannelAssociations</code> action.</p>
  **/
  getBotChannelAssociations(
    req: operations.GetBotChannelAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBotChannelAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBotChannelAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/aliases/{aliasName}/channels/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBotChannelAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBotChannelAssociationsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBotVersions - <p>Gets information about all of the versions of a bot.</p> <p>The <code>GetBotVersions</code> operation returns a <code>BotMetadata</code> object for each version of a bot. For example, if a bot has three numbered versions, the <code>GetBotVersions</code> operation returns four <code>BotMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetBotVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetBotVersions</code> action.</p>
  **/
  getBotVersions(
    req: operations.GetBotVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBotVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBotVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{name}/versions/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBotVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBotVersionsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBots - <p>Returns bot information as follows: </p> <ul> <li> <p>If you provide the <code>nameContains</code> field, the response includes information for the <code>$LATEST</code> version of all bots whose name contains the specified string.</p> </li> <li> <p>If you don't specify the <code>nameContains</code> field, the operation returns information about the <code>$LATEST</code> version of all of your bots.</p> </li> </ul> <p>This operation requires permission for the <code>lex:GetBots</code> action.</p>
  **/
  getBots(
    req: operations.GetBotsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBotsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBotsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bots/";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBotsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBotsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBuiltinIntent - <p>Returns information about a built-in intent.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntent</code> action.</p>
  **/
  getBuiltinIntent(
    req: operations.GetBuiltinIntentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBuiltinIntentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBuiltinIntentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/builtins/intents/{signature}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBuiltinIntentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBuiltinIntentResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBuiltinIntents - <p>Gets a list of built-in intents that meet the specified criteria.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntents</code> action.</p>
  **/
  getBuiltinIntents(
    req: operations.GetBuiltinIntentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBuiltinIntentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBuiltinIntentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/builtins/intents/";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBuiltinIntentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBuiltinIntentsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBuiltinSlotTypes - <p>Gets a list of built-in slot types that meet the specified criteria.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p> <p>This operation requires permission for the <code>lex:GetBuiltInSlotTypes</code> action.</p>
  **/
  getBuiltinSlotTypes(
    req: operations.GetBuiltinSlotTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBuiltinSlotTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBuiltinSlotTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/builtins/slottypes/";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBuiltinSlotTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getBuiltinSlotTypesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getExport - Exports the contents of a Amazon Lex resource in a specified format. 
  **/
  getExport(
    req: operations.GetExportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetExportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetExportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/exports/#name&version&resourceType&exportType";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetExportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getExportResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getImport - Gets information about an import job started with the <code>StartImport</code> operation.
  **/
  getImport(
    req: operations.GetImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/imports/{importId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getImportResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntent - <p> Returns information about an intent. In addition to the intent name, you must specify the intent version. </p> <p> This operation requires permissions to perform the <code>lex:GetIntent</code> action. </p>
  **/
  getIntent(
    req: operations.GetIntentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intents/{name}/versions/{version}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getIntentResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntentVersions - <p>Gets information about all of the versions of an intent.</p> <p>The <code>GetIntentVersions</code> operation returns an <code>IntentMetadata</code> object for each version of an intent. For example, if an intent has three numbered versions, the <code>GetIntentVersions</code> operation returns four <code>IntentMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetIntentVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetIntentVersions</code> action.</p>
  **/
  getIntentVersions(
    req: operations.GetIntentVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntentVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntentVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intents/{name}/versions/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntentVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getIntentVersionsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getIntents - <p>Returns intent information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all intents that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all intents. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetIntents</code> action. </p>
  **/
  getIntents(
    req: operations.GetIntentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIntentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIntentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/intents/";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetIntentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getIntentsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMigration - Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.
  **/
  getMigration(
    req: operations.GetMigrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMigrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMigrationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/migrations/{migrationId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMigrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMigrationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMigrations - Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.
  **/
  getMigrations(
    req: operations.GetMigrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMigrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMigrationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/migrations";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMigrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMigrationsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSlotType - <p>Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version.</p> <p>This operation requires permissions for the <code>lex:GetSlotType</code> action.</p>
  **/
  getSlotType(
    req: operations.GetSlotTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSlotTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSlotTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/slottypes/{name}/versions/{version}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSlotTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSlotTypeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSlotTypeVersions - <p>Gets information about all versions of a slot type.</p> <p>The <code>GetSlotTypeVersions</code> operation returns a <code>SlotTypeMetadata</code> object for each version of a slot type. For example, if a slot type has three numbered versions, the <code>GetSlotTypeVersions</code> operation returns four <code>SlotTypeMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetSlotTypeVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetSlotTypeVersions</code> action.</p>
  **/
  getSlotTypeVersions(
    req: operations.GetSlotTypeVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSlotTypeVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSlotTypeVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/slottypes/{name}/versions/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSlotTypeVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSlotTypeVersionsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSlotTypes - <p>Returns slot type information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all slot types that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all slot types. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetSlotTypes</code> action. </p>
  **/
  getSlotTypes(
    req: operations.GetSlotTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSlotTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSlotTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/slottypes/";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSlotTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSlotTypesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUtterancesView - <p>Use the <code>GetUtterancesView</code> operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to.</p> <p>For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the <code>GetUtterancesView</code> operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the <code>OrderFlowers</code> intent so that your bot recognizes that utterance.</p> <p>After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. </p> <p>Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version.</p> <p>If you set <code>childDirected</code> field to true when you created your bot, if you are using slot obfuscation with one or more slots, or if you opted out of participating in improving Amazon Lex, utterances are not available.</p> <p>This operation requires permissions for the <code>lex:GetUtterancesView</code> action.</p>
  **/
  getUtterancesView(
    req: operations.GetUtterancesViewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUtterancesViewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUtterancesViewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botname}/utterances#view=aggregation&bot_versions&status_type", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUtterancesViewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getUtterancesViewResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTagsForResource - Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.
  **/
  listTagsForResource(
    req: operations.ListTagsForResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsForResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsForResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTagsForResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTagsForResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putBot - <p>Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the <code/> response <code>FAILED</code>. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p> <p>If you specify the name of an existing bot, the fields in the request replace the existing values in the <code>$LATEST</code> version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the <code>idleTTLInSeconds</code> and <code>privacySettings</code> fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception.</p> <p>This operation requires permissions for the <code>lex:PutBot</code> action. For more information, see <a>security-iam</a>.</p>
  **/
  putBot(
    req: operations.PutBotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutBotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutBotRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{name}/versions/$LATEST", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutBotResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putBotResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putBotAlias - <p>Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:PutBotAlias</code> action. </p>
  **/
  putBotAlias(
    req: operations.PutBotAliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutBotAliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutBotAliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/bots/{botName}/aliases/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutBotAliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putBotAliasResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putIntent - <p>Creates an intent or replaces an existing intent.</p> <p>To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an <code>OrderPizza</code> intent. </p> <p>To create an intent or replace an existing intent, you must provide the following:</p> <ul> <li> <p>Intent name. For example, <code>OrderPizza</code>.</p> </li> <li> <p>Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."</p> </li> <li> <p>Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.</p> </li> <li> <p>How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. </p> </li> </ul> <p>You can specify other optional information in the request, such as:</p> <ul> <li> <p>A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"</p> </li> </ul> <p>If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the <code>$LATEST</code> version of the intent with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of an intent, the <code>status</code> field of any bot that uses the <code>$LATEST</code> version of the intent is set to <code>NOT_BUILT</code>.</p> <p>For more information, see <a>how-it-works</a>.</p> <p>This operation requires permissions for the <code>lex:PutIntent</code> action.</p>
  **/
  putIntent(
    req: operations.PutIntentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutIntentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutIntentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/intents/{name}/versions/$LATEST", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutIntentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putIntentResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putSlotType - <p>Creates a custom slot type or replaces an existing custom slot type.</p> <p>To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see <a>how-it-works</a>.</p> <p>If you specify the name of an existing slot type, the fields in the request replace the existing values in the <code>$LATEST</code> version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of a slot type, if a bot uses the <code>$LATEST</code> version of an intent that contains the slot type, the bot's <code>status</code> field is set to <code>NOT_BUILT</code>.</p> <p>This operation requires permissions for the <code>lex:PutSlotType</code> action.</p>
  **/
  putSlotType(
    req: operations.PutSlotTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSlotTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSlotTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/slottypes/{name}/versions/$LATEST", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutSlotTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putSlotTypeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preconditionFailedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * startImport - Starts a job to import a resource to Amazon Lex.
  **/
  startImport(
    req: operations.StartImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/imports/";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startImportResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * startMigration - <p>Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage of the new features of Amazon Lex V2.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/migrate.html">Migrating a bot</a> in the <i>Amazon Lex developer guide</i>.</p>
  **/
  startMigration(
    req: operations.StartMigrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartMigrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartMigrationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/migrations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartMigrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startMigrationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagResource - Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
  **/
  tagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * untagResource - Removes tags from a bot, bot alias or bot channel.
  **/
  untagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}#tagKeys", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.untagResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
