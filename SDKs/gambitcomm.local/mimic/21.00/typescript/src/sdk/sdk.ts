import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://gambitcomm.local",
	"http://127.0.0.1",
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

/* SDK Documentation: https://www.gambitcomm.com/site/about.php - Find out more about Gambit*/
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
   * accessAdd - Adds/Overwrites the user entry in the access control database.
   *
   * Adds/Overwrites the user entry in the access control database.
  **/
  accessAdd(
    req: operations.AccessAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/add/{user}/{agents}/{mask}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessDel - Clears a users entry from access control database.
   *
   * Using '*' for user clears all the users.
  **/
  accessDel(
    req: operations.AccessDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/del/{user}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessGetAcldb - Returns the current access control database in use.
   *
   * If nothing is specified then this returns "".
  **/
  accessGetAcldb(
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetAcldbResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/acldb";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessGetAcldbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessGetAcldb200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessGetAdmindir - Returns the current admin directory.
   *
   * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
  **/
  accessGetAdmindir(
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetAdmindirResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/admindir";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessGetAdmindirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessGetAdmindir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessGetAdminuser - Returns the current administrator.
   *
   * If nothing is specified in admin/settings.cfg then returns "".
  **/
  accessGetAdminuser(
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetAdminuserResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/adminuser";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessGetAdminuserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessGetAdminuser200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessGetEnabled - Returns the state of access control checking.
   *
   * 0 indicates that it is disabled, 1 indicates it is enabled.
  **/
  accessGetEnabled(
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetEnabledResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/enabled";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessGetEnabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessGetEnabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessList - Returns an array of entries.
   *
   * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
  **/
  accessList(
    config?: AxiosRequestConfig
  ): Promise<operations.AccessListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessEntries = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessLoad - Loads the specified file for access control data.
   *
   * If filename is not specified then the currently set 'acldb' parameter is used.
  **/
  accessLoad(
    req: operations.AccessLoadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessLoadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessLoadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/load/{filename}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessLoadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessLoad200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessSave - Saves current access control data in specified file.
   *
   * If filename is not specified then the currently set 'acldb' parameter is used.
  **/
  accessSave(
    req: operations.AccessSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessSaveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/save/{filename}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessSave200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessSetAcldb - Allows setting the name of the current access control database.
   *
   * This will be used for subsequent load and save operations.
  **/
  accessSetAcldb(
    req: operations.AccessSetAcldbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessSetAcldbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessSetAcldbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/set/acldb/{databaseName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessSetAcldbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessSetAcldb200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * accessSetEnabled - Allows the user to enable/disable the access control check.
   *
   * 0 indicates disabled, 1 indicates enabled.
  **/
  accessSetEnabled(
    req: operations.AccessSetEnabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessSetEnabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessSetEnabledRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/set/enabled/{enabledOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AccessSetEnabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessSetEnabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * add - Add an entry to a table.
   *
   * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
  **/
  add(
    req: operations.AddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/add/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.add200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addDaemonTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
   *
   * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
  **/
  addDaemonTimerScript(
    req: operations.AddDaemonTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddDaemonTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddDaemonTimerScriptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/timer/script/add/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddDaemonTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addDaemonTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addIpalias - Adds a new ipalias for the agent.
   *
   * port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
  **/
  addIpalias(
    req: operations.AddIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddIpaliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * addTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
   *
   * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
  **/
  addTimerScript(
    req: operations.AddTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddTimerScriptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentRemove - Remove the current agent.
   *
   * For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
  **/
  agentRemove(
    req: operations.AgentRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentRemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/remove", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AgentRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentRemove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStoreCopy - This command copies the variable store from the other agent to this agent.
   *
   * This command copies the variable store from the other agent to this agent.
  **/
  agentStoreCopy(
    req: operations.AgentStoreCopyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreCopyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreCopyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/copy/{otherAgent}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AgentStoreCopyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStoreCopy200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
   *
   * It returns "1" if the variable exists, else "0".
  **/
  agentStoreExists(
    req: operations.AgentStoreExistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreExistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreExistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/exists/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AgentStoreExistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStoreExists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStoreGet - Fetches the value associated with a variable.
   *
   * The value will be returned as a string (like all Tcl values).
  **/
  agentStoreGet(
    req: operations.AgentStoreGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/get/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AgentStoreGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStoreGet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStoreList - This command will return the list of variables in the said scope.
   *
   * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
  **/
  agentStoreList(
    req: operations.AgentStoreListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AgentStoreListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStoreList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
   *
   * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
  **/
  agentStoreLreplace(
    req: operations.AgentStoreLreplaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreLreplaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreLreplaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/lreplace/{var}/{index}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AgentStoreLreplaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStoreLreplace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
   *
   * It returns "1" if the variable is persistent, else "0".
  **/
  agentStorePersists(
    req: operations.AgentStorePersistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStorePersistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStorePersistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/persists/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AgentStorePersistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStorePersists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStoreSet - These commands allow the creation of a new variable, or changing an existing value.
   *
   * The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
  **/
  agentStoreSet(
    req: operations.AgentStoreSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/set/{var}/{persist}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.AgentStoreSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStoreSet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * agentStoreUnset - Deletes a variable which is currently defined.
   *
   * This will cleanup persistent variables if needed
  **/
  agentStoreUnset(
    req: operations.AgentStoreUnsetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreUnsetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreUnsetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/unset/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AgentStoreUnsetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStoreUnset200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cfgLoad - Load the lab configuration file file.
   *
   * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
  **/
  cfgLoad(
    req: operations.CfgLoadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CfgLoadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CfgLoadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CfgLoadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cfgLoad200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cfgNew - Clear the lab configuration.
   *
   * Clear the lab configuration.
  **/
  cfgNew(
    req: operations.CfgNewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CfgNewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CfgNewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/clear/{firstAgentNum}/{lastAgentNum}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CfgNewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cfgNew200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cfgSave - Save the lab configuration.
   *
   * Save the lab configuration.
  **/
  cfgSave(
    config?: AxiosRequestConfig
  ): Promise<operations.CfgSaveResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/save";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CfgSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cfgSave200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cfgSaveas - Save the lab configuration in file.
   *
   * Save the lab configuration in file.
  **/
  cfgSaveas(
    req: operations.CfgSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CfgSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CfgSaveasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CfgSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cfgSaveas200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * delDaemonTimerScript - Remove a timer script from the execution list.
   *
   * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
  **/
  delDaemonTimerScript(
    req: operations.DelDaemonTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DelDaemonTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DelDaemonTimerScriptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/timer/script/delete/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DelDaemonTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.delDaemonTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * delIpalias - Deletes an existing ipalias from the agent.
   *
   * port defaults to 161 if not specified.
  **/
  delIpalias(
    req: operations.DelIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DelIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DelIpaliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DelIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.delIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * delTimerScript - Remove a timer script from the execution list.
   *
   * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
  **/
  delTimerScript(
    req: operations.DelTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DelTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DelTimerScriptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DelTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.delTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * evalValue - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
   *
   * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
  **/
  evalValue(
    req: operations.EvalValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EvalValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EvalValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/eval/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EvalValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.evalValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fromAdd - Add a source address that the agent will accept messages from.
   *
   * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
  **/
  fromAdd(
    req: operations.FromAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FromAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FromAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/add/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FromAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fromAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fromDel - delete a source address that the agent will accept messages from.
   *
   * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
  **/
  fromDel(
    req: operations.FromDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FromDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FromDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/delete/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FromDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fromDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fromList - List the source addresses that the agent will accept messages from.
   *
   * This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
  **/
  fromList(
    req: operations.FromListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FromListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FromListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FromListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ipSources = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActiveDataList - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
   *
   * This list is guaranteed to be sorted into increasing order.
  **/
  getActiveDataList(
    config?: AxiosRequestConfig
  ): Promise<operations.GetActiveDataListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/active_data_list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetActiveDataListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getActiveDataList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getActiveList - The list of {agentnum} that are currently active (running or paused).
   *
   * This list is guaranteed to be sorted into increasing order.
  **/
  getActiveList(
    config?: AxiosRequestConfig
  ): Promise<operations.GetActiveListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/active_list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetActiveListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getActiveList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAgentState - current running state of the agent
   *
   * 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
  **/
  getAgentState(
    req: operations.GetAgentStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgentStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgentStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/state", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAgentStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAgentState200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCfgFileChanged - This predicate indicates if the currently loaded agent configuration file has changed.
   *
   * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
  **/
  getCfgFileChanged(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCfgFileChangedResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/cfgfile_changed";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCfgFileChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCfgFileChanged200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCfgfile - The currently loaded lab configuration file for the particular user.
   *
   * In the case of multi-user access this command returns a different configuration file loaded for each user.
  **/
  getCfgfile(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCfgfileResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/cfgfile";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCfgfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCfgfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChanged - has the agent value space changed?
   *
   * has the agent value space changed?
  **/
  getChanged(
    req: operations.GetChangedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChangedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChangedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/changed", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getChanged200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChangedConfigList - The list of {agentnum} for which a configurable parameter changed.
   *
   * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
  **/
  getChangedConfigList(
    config?: AxiosRequestConfig
  ): Promise<operations.GetChangedConfigListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/changed_config_list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetChangedConfigListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getChangedConfigList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getChangedStateList - The list of {agentnum state} for which the state changed.
   *
   * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
  **/
  getChangedStateList(
    config?: AxiosRequestConfig
  ): Promise<operations.GetChangedStateListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/changed_state_list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetChangedStateListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.agentStates = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getClients - The number of clients currently connected to the daemon.
   *
   * The number of clients currently connected to the daemon.
  **/
  getClients(
    config?: AxiosRequestConfig
  ): Promise<operations.GetClientsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/clients";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getClients200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConfigChanged - has the lab configuration changed?
   *
   * has the lab configuration changed?
  **/
  getConfigChanged(
    req: operations.GetConfigChangedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigChangedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigChangedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/config_changed", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConfigChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getConfigChanged200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getConfiguredList - The list of {agentnum} that are currently configured.
   *
   * This list is guaranteed to be sorted into increasing order.
  **/
  getConfiguredList(
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfiguredListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/configured_list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConfiguredListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getConfiguredList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDaemonProtocols - The set of protocols supported by the Simulator.
   *
   * The set of protocols supported by the Simulator.
  **/
  getDaemonProtocols(
    config?: AxiosRequestConfig
  ): Promise<operations.GetDaemonProtocolsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/protocols";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDaemonProtocolsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDaemonProtocols200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDelay - one-way transit delay in msec.
   *
   * The minimum granularity is 10 msec.
  **/
  getDelay(
    req: operations.GetDelayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDelayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDelayRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/delay", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDelayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDelay200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDrops - drop rate (every N-th PDU). 0 means no drops.
   *
   * drop rate (every N-th PDU). 0 means no drops.
  **/
  getDrops(
    req: operations.GetDropsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/drops", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDropsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDrops200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHost - host address of the agent.
   *
   * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
  **/
  getHost(
    req: operations.GetHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/host", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getHost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInfo - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
   *
   * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
  **/
  getInfo(
    req: operations.GetInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/info/{object}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInfo200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInformTimeout - timeout in seconds for retransmitting INFORM PDUs.
   *
   * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
  **/
  getInformTimeout(
    req: operations.GetInformTimeoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInformTimeoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInformTimeoutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/inform_timeout", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInformTimeoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInformTimeout200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInstances - Display the MIB object instances for the specified object.
   *
   * This enables MIB browsing of the MIB on the current agent.
  **/
  getInstances(
    req: operations.GetInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/instances/{object}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstances200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInterface - network interface card for the agent.
   *
   * network interface card for the agent.
  **/
  getInterface(
    req: operations.GetInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/interface", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInterface200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getInterfaces - The set of network interfaces that can be used for simulations.
   *
   * The set of network interfaces that can be used for simulations.
  **/
  getInterfaces(
    config?: AxiosRequestConfig
  ): Promise<operations.GetInterfacesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/interfaces";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInterfacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInterfaces200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLast - The last configured agent instance.
   *
   * The last configured agent instance.
  **/
  getLast(
    config?: AxiosRequestConfig
  ): Promise<operations.GetLastResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/last";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getLast200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLog - The current log file for the Simulator.
   *
   * The current log file for the Simulator.
  **/
  getLog(
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/log";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getLog200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMask - subnet mask of the agent.
   *
   * subnet mask of the agent.
  **/
  getMask(
    req: operations.GetMaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMaskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/mask", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMask200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMax - The maximum number of agent instances.
   *
   * The maximum number of agent instances.
  **/
  getMax(
    config?: AxiosRequestConfig
  ): Promise<operations.GetMaxResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/max";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMax200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMib - Return the MIB that defines the specified object.
   *
   * This will only return a MIB name if the object is unmistakeably defined in a MIB.
  **/
  getMib(
    req: operations.GetMibRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMibResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMibRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/mib/{object}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMibResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMib200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMibs - set of MIBs, simulations and scenarios
   *
   * set of MIBs, simulations and scenarios
  **/
  getMibs(
    req: operations.GetMibsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMibsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMibsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/mibs", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMibsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.triplets = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getName - Return the symbolic name of the specified object identifier.
   *
   * Return the symbolic name of the specified object identifier.
  **/
  getName(
    req: operations.GetNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/name/{OID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getName200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetaddr - The network address of the host where the MIMIC simulator is running.
   *
   * The network address of the host where the MIMIC simulator is running.
  **/
  getNetaddr(
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetaddrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/netaddr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetaddrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetaddr200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNetdev - The default network device to be used for agent addresses.
   *
   * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
  **/
  getNetdev(
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetdevResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/netdev";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNetdevResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNetdev200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getNumberStarts - number of starts for the agent.
   *
   * This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
  **/
  getNumberStarts(
    req: operations.GetNumberStartsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumberStartsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumberStartsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/num_starts", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNumberStartsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getNumberStarts200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getObjects - Display the MIB objects below the current position
   *
   * This command is similar to the ls or dir operating system commands to list filesystem directories.
  **/
  getObjects(
    req: operations.GetObjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetObjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetObjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/list/{OID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetObjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getObjects200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOid - Return the numeric OID of the specified object.
   *
   * Return the numeric OID of the specified object.
  **/
  getOid(
    req: operations.GetOidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/oid/{object}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOid200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOiddir - MIB directory of the agent.
   *
   * MIB directory of the agent.
  **/
  getOiddir(
    req: operations.GetOiddirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOiddirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOiddirRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/oiddir", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOiddirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOiddir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOwner - owner of the agent.
   *
   * owner of the agent.
  **/
  getOwner(
    req: operations.GetOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/owner", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOwner200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPdusize - maximum PDU size.
   *
   * The limit for this configurable is 65536.
  **/
  getPdusize(
    req: operations.GetPdusizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPdusizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPdusizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/pdusize", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPdusizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPdusize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPort - port number
   *
   * port number
  **/
  getPort(
    req: operations.GetPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/port", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPort200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPrivdir - private directory of the agent.
   *
   * private directory of the agent.
  **/
  getPrivdir(
    req: operations.GetPrivdirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPrivdirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPrivdirRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/privdir", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPrivdirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPrivdir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProduct - The product number that is licensed.
   *
   * The product number that is licensed.
  **/
  getProduct(
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/product";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getProduct200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProtocols - protocols supported by agent
   *
   * protocols supported by agent as an array of strings
  **/
  getProtocols(
    req: operations.GetProtocolsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProtocolsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProtocolsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/protocol", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProtocolsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getProtocols200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReadCommunity - read community string
   *
   * read community string
  **/
  getReadCommunity(
    req: operations.GetReadCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReadCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReadCommunityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/read", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReadCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getReadCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReturn - The return mode.
   *
   * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
  **/
  getReturn(
    config?: AxiosRequestConfig
  ): Promise<operations.GetReturnResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/return";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReturnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getReturn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getScen - first scenario name
   *
   * first scenario name
  **/
  getScen(
    req: operations.GetScenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/scen", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetScenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getScen200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSim - first simulation name
   *
   * first simulation name
  **/
  getSim(
    req: operations.GetSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/sim", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSim200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStarttime - relative start time
   *
   * relative start time
  **/
  getStarttime(
    req: operations.GetStarttimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStarttimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStarttimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/start", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStarttimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStarttime200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getState - Get the state of a MIB object object.
   *
   * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
  **/
  getState(
    req: operations.GetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/state/get/{object}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getState200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStateChanged - has the agent state changed?
   *
   * has the agent state changed?
  **/
  getStateChanged(
    req: operations.GetStateChangedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStateChangedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStateChangedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/state_changed", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStateChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStateChanged200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStatistics - current statistics of the agent instance
   *
   * The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
  **/
  getStatistics(
    req: operations.GetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTrace - SNMP PDU tracing
   *
   * SNMP PDU tracing
  **/
  getTrace(
    req: operations.GetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTrace200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getValidate - SNMP SET validation policy.
   *
   * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
  **/
  getValidate(
    req: operations.GetValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetValidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/validate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getValidate200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getValue - Get a variable in the Value Space.
   *
   * Get a variable in the Value Space.
  **/
  getValue(
    req: operations.GetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVariables - Display the variables for the specified instance instance for the specified MIB object object
   *
   * This enables variable browsing of the MIB on the current agent.
  **/
  getVariables(
    req: operations.GetVariablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariablesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/variables/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVariablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getVariables200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVersion - The version of the MIMIC command interface.
   *
   * The version of the MIMIC command interface.
  **/
  getVersion(
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/version";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getVersion200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWriteCommunity - write community string
   *
   * write community string
  **/
  getWriteCommunity(
    req: operations.GetWriteCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWriteCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWriteCommunityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/write", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWriteCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getWriteCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * halt - Halt the current agent.
   *
   * Halt the current agent.
  **/
  halt(
    req: operations.HaltRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HaltResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HaltRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/halt", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HaltResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.halt200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDaemonTimerScripts - List the timer scripts currently running along with the their intervals.
   *
   * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
  **/
  listDaemonTimerScripts(
    config?: AxiosRequestConfig
  ): Promise<operations.ListDaemonTimerScriptsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/timer/script/list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListDaemonTimerScriptsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.timerScripts = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listIpaliases - Lists all the additional ipaliases configured for the agent.
   *
   * The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
  **/
  listIpaliases(
    req: operations.ListIpaliasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIpaliasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIpaliasesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListIpaliasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTimerScripts - List the timer scripts currently running along with the their intervals.
   *
   * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
  **/
  listTimerScripts(
    req: operations.ListTimerScriptsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTimerScriptsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTimerScriptsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTimerScriptsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.timerScripts = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mgetInfo - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
   *
   * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
  **/
  mgetInfo(
    req: operations.MgetInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MgetInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MgetInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/mget/{infoArray}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MgetInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.mgetInfo200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * msetValue - Set multiple variables in the Value Space.
   *
   * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
  **/
  msetValue(
    req: operations.MsetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MsetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MsetValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/mset", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.MsetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.msetValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * munsetValue - Unset multiple variables in the Value Space
   *
   * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
  **/
  munsetValue(
    req: operations.MunsetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MunsetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MunsetValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/munset", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.MunsetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.munsetValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * new - Add an agent.
   *
   * Add an agent.
  **/
  new(
    req: operations.NewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/add/{IP}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.NewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.new200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pauseNow - Pause the current agent.
   *
   * Pause the current agent.
  **/
  pauseNow(
    req: operations.PauseNowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PauseNowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PauseNowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/pause", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PauseNowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pauseNow200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolCoapGetArgs - Show the agent's COAP argument structure
   *
   * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolCoapGetArgs(
    req: operations.ProtocolCoapGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolCoapGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolCoapGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolCoapGetConfig - Show the agent's COAP configuration
   *
   * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolCoapGetConfig(
    req: operations.ProtocolCoapGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolCoapGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configCoap = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolCoapGetStatistics - Show the agent's COAP statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolCoapGetStatistics(
    req: operations.ProtocolCoapGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolCoapGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolCoapGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolCoapGetStatsHdr - Show the COAP statistics headers
   *
   * The headers of statistics fields
  **/
  protocolCoapGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/coap/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolCoapGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolCoapGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolCoapGetTrace - Show the agent's COAP traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolCoapGetTrace(
    req: operations.ProtocolCoapGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolCoapGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configCoap = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolCoapSetConfig - Set the agent's COAP configuration
   *
   * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolCoapSetConfig(
    req: operations.ProtocolCoapSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolCoapSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolCoapSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolCoapSetTrace - Set the agent's COAP traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolCoapSetTrace(
    req: operations.ProtocolCoapSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolCoapSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolCoapSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpGetArgs - Show the agent's DHCP argument structure
   *
   * Agent's DHCP configuration particulars
  **/
  protocolDhcpGetArgs(
    req: operations.ProtocolDhcpGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpGetConfig - Show the agent's DHCP configuration
   *
   * Agent's DHCP configuration hwaddr,classid,add_options,script
  **/
  protocolDhcpGetConfig(
    req: operations.ProtocolDhcpGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configDhcp = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpGetStatistics - Show the agent's DHCP statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolDhcpGetStatistics(
    req: operations.ProtocolDhcpGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpGetStatsHdr - Show the DHCP statistics headers
   *
   * The headers of statistics fields
  **/
  protocolDhcpGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/dhcp/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpGetTrace - Show the agent's DHCP traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolDhcpGetTrace(
    req: operations.ProtocolDhcpGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configDhcp = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpParams - Show the parameters configured by the server in its DHCP-OFFER message
   *
   * DHCP-OFFER message parameters
  **/
  protocolDhcpParams(
    req: operations.ProtocolDhcpParamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpParamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpParamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpParamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpParams200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpSetConfig - Set the agent's DHCP configuration
   *
   * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolDhcpSetConfig(
    req: operations.ProtocolDhcpSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolDhcpSetTrace - Set the agent's DHCP traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolDhcpSetTrace(
    req: operations.ProtocolDhcpSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolDhcpSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolGetConfig - Returns the protocol's configuration.
   *
   * Returns the protocol's configuration.
  **/
  protocolGetConfig(
    req: operations.ProtocolGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/{prot}/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolGetConfig200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiGetArgs - Show the agent's IPMI argument structure
   *
   * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolIpmiGetArgs(
    req: operations.ProtocolIpmiGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiGetAttr - Show the outgoing message's attributes
   *
   * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
  **/
  protocolIpmiGetAttr(
    req: operations.ProtocolIpmiGetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetAttrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiGetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiGetConfig - Show the agent's IPMI configuration
   *
   * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolIpmiGetConfig(
    req: operations.ProtocolIpmiGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configIpmi = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiGetStatistics - Show the agent's IPMI statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolIpmiGetStatistics(
    req: operations.ProtocolIpmiGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiGetStatsHdr - Show the IPMI statistics headers
   *
   * The headers of statistics fields
  **/
  protocolIpmiGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ipmi/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiGetTrace - Show the agent's IPMI traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolIpmiGetTrace(
    req: operations.ProtocolIpmiGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configIpmi = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiSetAttr - Set the outgoing message's attributes
   *
   * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
  **/
  protocolIpmiSetAttr(
    req: operations.ProtocolIpmiSetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiSetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiSetAttrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiSetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiSetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiSetConfig - Set the agent's IPMI configuration
   *
   * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolIpmiSetConfig(
    req: operations.ProtocolIpmiSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolIpmiSetTrace - Set the agent's IPMI traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolIpmiSetTrace(
    req: operations.ProtocolIpmiSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolIpmiSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
   *
   * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
  **/
  protocolMqttClientGetProtstate(
    req: operations.ProtocolMqttClientGetProtstateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientGetProtstateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientGetProtstateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientGetProtstateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientGetProtstate200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientGetState - Show the agent's MQTT state
   *
   * 0 means stopped, 1 means running
  **/
  protocolMqttClientGetState(
    req: operations.ProtocolMqttClientGetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientGetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientGetStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientGetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientGetState200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientMessageCard - Show the agent's current messages' cardinality
   *
   * 0 or more
  **/
  protocolMqttClientMessageCard(
    req: operations.ProtocolMqttClientMessageCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientMessageCardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageCard200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientMessageGet - Show the agent's message attributes
   *
   * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
  **/
  protocolMqttClientMessageGet(
    req: operations.ProtocolMqttClientMessageGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientMessageGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageGet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientMessageSet - Set the agent's message attributes
   *
   * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
  **/
  protocolMqttClientMessageSet(
    req: operations.ProtocolMqttClientMessageSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientMessageSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageSet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
   *
   * Restarts a subscription
  **/
  protocolMqttClientResubscribe(
    req: operations.ProtocolMqttClientResubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientResubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientResubscribeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientResubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientResubscribe200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
   *
   * Abort a connection
  **/
  protocolMqttClientRuntimeAbort(
    req: operations.ProtocolMqttClientRuntimeAbortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeAbortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeAbortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientRuntimeAbortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeAbort200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
   *
   * Start a connection
  **/
  protocolMqttClientRuntimeConnect(
    req: operations.ProtocolMqttClientRuntimeConnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeConnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeConnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientRuntimeConnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeConnect200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
   *
   * Graceful disconnect
  **/
  protocolMqttClientRuntimeDisconnect(
    req: operations.ProtocolMqttClientRuntimeDisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeDisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeDisconnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientRuntimeDisconnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeDisconnect200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
   *
   * Broker IP address
  **/
  protocolMqttClientSetBroker(
    req: operations.ProtocolMqttClientSetBrokerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetBrokerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetBrokerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetBrokerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetBroker200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetCleansession - Set the agent's MQTT session
   *
   * 1 for clean session , 0 not
  **/
  protocolMqttClientSetCleansession(
    req: operations.ProtocolMqttClientSetCleansessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetCleansessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetCleansessionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetCleansessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetCleansession200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetClientid - Set the agent's MQTT client ID
   *
   * MQTT client ID
  **/
  protocolMqttClientSetClientid(
    req: operations.ProtocolMqttClientSetClientidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetClientidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetClientidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetClientidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetClientid200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
   *
   * Keep alive the TCP connection
  **/
  protocolMqttClientSetKeepalive(
    req: operations.ProtocolMqttClientSetKeepaliveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetKeepaliveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetKeepaliveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetKeepaliveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetKeepalive200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
   *
   * Action to take when MQTT session is disconnected
  **/
  protocolMqttClientSetOnDisconnect(
    req: operations.ProtocolMqttClientSetOnDisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetOnDisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetOnDisconnectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetOnDisconnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetOnDisconnect200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetPassword - Set the agent's MQTT client password
   *
   * Client password
  **/
  protocolMqttClientSetPassword(
    req: operations.ProtocolMqttClientSetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetPassword200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
   *
   * target TCP port
  **/
  protocolMqttClientSetPort(
    req: operations.ProtocolMqttClientSetPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetPort200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetUsername - Set the agent's MQTT client username
   *
   * Client username
  **/
  protocolMqttClientSetUsername(
    req: operations.ProtocolMqttClientSetUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetUsernameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetUsername200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetWillmsg - Set the agent's MQTT client's will
   *
   * Will message
  **/
  protocolMqttClientSetWillmsg(
    req: operations.ProtocolMqttClientSetWillmsgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillmsgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillmsgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWillmsgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillmsg200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
   *
   * QOS field
  **/
  protocolMqttClientSetWillqos(
    req: operations.ProtocolMqttClientSetWillqosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillqosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillqosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWillqosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillqos200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetWillretain - Set the agent's MQTT retained will
   *
   * Retaining will
  **/
  protocolMqttClientSetWillretain(
    req: operations.ProtocolMqttClientSetWillretainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillretainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillretainRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWillretainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillretain200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
   *
   * Will topic for the will message
  **/
  protocolMqttClientSetWilltopic(
    req: operations.ProtocolMqttClientSetWilltopicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWilltopicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWilltopicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSetWilltopicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWilltopic200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
   *
   * 0 or more
  **/
  protocolMqttClientSubscribeCard(
    req: operations.ProtocolMqttClientSubscribeCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeCardRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSubscribeCardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeCard200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSubscribeGet - Show the agent's subscription attributes
   *
   * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
  **/
  protocolMqttClientSubscribeGet(
    req: operations.ProtocolMqttClientSubscribeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSubscribeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeGet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientSubscribeSet - Set the agent's subscribe attributes
   *
   * Attribute can not be properties .
  **/
  protocolMqttClientSubscribeSet(
    req: operations.ProtocolMqttClientSubscribeSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientSubscribeSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeSet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
   *
   * Stops a subscription
  **/
  protocolMqttClientUnsubscribe(
    req: operations.ProtocolMqttClientUnsubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientUnsubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientUnsubscribeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttClientUnsubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientUnsubscribe200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttGetArgs - Show the agent's MQTT argument structure
   *
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolMqttGetArgs(
    req: operations.ProtocolMqttGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttGetConfig - Show the agent's MQTT configuration
   *
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolMqttGetConfig(
    req: operations.ProtocolMqttGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configMqtt = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttGetStatistics - Show the agent's MQTT statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolMqttGetStatistics(
    req: operations.ProtocolMqttGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttGetStatsHdr - Show the MQTT statistics headers
   *
   * The headers of statistics fields
  **/
  protocolMqttGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/mqtt/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttGetTrace - Show the agent's MQTT traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolMqttGetTrace(
    req: operations.ProtocolMqttGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configMqtt = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttSetConfig - Set the agent's MQTT configuration
   *
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolMqttSetConfig(
    req: operations.ProtocolMqttSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolMqttSetTrace - Set the agent's MQTT traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolMqttSetTrace(
    req: operations.ProtocolMqttSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolMqttSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolMqttSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowChangeAttr - Change NETFLOW export attributes
   *
   * Change attributes
  **/
  protocolNetflowChangeAttr(
    req: operations.ProtocolNetflowChangeAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeAttrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowChangeAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowChangeDfs - Change NETFLOW data export interval
   *
   * Interval in msec .
  **/
  protocolNetflowChangeDfs(
    req: operations.ProtocolNetflowChangeDfsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeDfsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeDfsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowChangeDfsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeDfs200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowChangeTfs - Change NETFLOW template export interval
   *
   * Interval in msec .
  **/
  protocolNetflowChangeTfs(
    req: operations.ProtocolNetflowChangeTfsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeTfsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeTfsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowChangeTfsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeTfs200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowGetArgs - Show the agent's NETFLOW argument structure
   *
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolNetflowGetArgs(
    req: operations.ProtocolNetflowGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowGetConfig - Show the agent's NETFLOW configuration
   *
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolNetflowGetConfig(
    req: operations.ProtocolNetflowGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configNetflow = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowGetStatistics - Show the agent's NETFLOW statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolNetflowGetStatistics(
    req: operations.ProtocolNetflowGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
   *
   * The headers of statistics fields
  **/
  protocolNetflowGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/netflow/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolNetflowGetTrace(
    req: operations.ProtocolNetflowGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configNetflow = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowHalt - Halt NETFLOW traffic
   *
   * Halt NETFLOW traffic
  **/
  protocolNetflowHalt(
    req: operations.ProtocolNetflowHaltRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowHaltResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowHaltRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowHaltResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowHalt200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowList - Show list of NETFLOW exports
   *
   * Show list of NETFLOW exports
  **/
  protocolNetflowList(
    req: operations.ProtocolNetflowListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowList200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowReload - Reload NETFLOW configuration before resuming traffic
   *
   * Reload NETFLOW configuration before resuming traffic
  **/
  protocolNetflowReload(
    req: operations.ProtocolNetflowReloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowReloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowReloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowReloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowReload200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowResume - Resuming traffic
   *
   * Resuming traffic
  **/
  protocolNetflowResume(
    req: operations.ProtocolNetflowResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowResumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowResume200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowSetCollector - Swap NETFLOW collector
   *
   * Allow changing collector without stopping agent
  **/
  protocolNetflowSetCollector(
    req: operations.ProtocolNetflowSetCollectorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetCollectorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetCollectorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetCollectorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetCollector200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowSetConfig - Set the agent's NETFLOW configuration
   *
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolNetflowSetConfig(
    req: operations.ProtocolNetflowSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowSetFileName - Swap NETFLOW configuration file
   *
   * Allow reloading the configuration file for an agent without stopping agent
  **/
  protocolNetflowSetFileName(
    req: operations.ProtocolNetflowSetFileNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetFileNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetFileNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetFileNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetFileName200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolNetflowSetTrace(
    req: operations.ProtocolNetflowSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolNetflowSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyGetArgs - Show the agent's PROXY argument structure
   *
   * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolProxyGetArgs(
    req: operations.ProtocolProxyGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyGetConfig - Show the agent's PROXY configuration
   *
   * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolProxyGetConfig(
    req: operations.ProtocolProxyGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configProxy = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyGetStatistics - Show the agent's PROXY statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolProxyGetStatistics(
    req: operations.ProtocolProxyGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyGetStatsHdr - Show the PROXY statistics headers
   *
   * The headers of statistics fields
  **/
  protocolProxyGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/proxy/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyGetTrace - Show the agent's PROXY traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolProxyGetTrace(
    req: operations.ProtocolProxyGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configProxy = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyPortAdd - Add individual proxy target on the agent and the simulator host
   *
   * Additional proxy target
  **/
  protocolProxyPortAdd(
    req: operations.ProtocolProxyPortAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyPortAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyPortIsstarted - Check individual target
   *
   * Check individual target
  **/
  protocolProxyPortIsstarted(
    req: operations.ProtocolProxyPortIsstartedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortIsstartedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortIsstartedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyPortIsstartedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortIsstarted200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyPortList - List all proxy targets
  **/
  protocolProxyPortList(
    req: operations.ProtocolProxyPortListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyPortListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyPortRemove - Remove individual proxy target on the agent and the simulator host
   *
   * Remove proxy target
  **/
  protocolProxyPortRemove(
    req: operations.ProtocolProxyPortRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortRemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyPortRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortRemove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyPortStart - Start additional target
   *
   * Start additional target
  **/
  protocolProxyPortStart(
    req: operations.ProtocolProxyPortStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyPortStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortStart200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxyPortStop - Stop additional target
   *
   * Stop additional target
  **/
  protocolProxyPortStop(
    req: operations.ProtocolProxyPortStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxyPortStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortStop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxySetConfig - Set the agent's PROXY configuration
   *
   * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolProxySetConfig(
    req: operations.ProtocolProxySetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxySetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxySetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxySetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxySetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolProxySetTrace - Set the agent's PROXY traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolProxySetTrace(
    req: operations.ProtocolProxySetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxySetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxySetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolProxySetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolProxySetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowGetArgs - Show the agent's SFLOW argument structure
   *
   * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSflowGetArgs(
    req: operations.ProtocolSflowGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowGetConfig - Show the agent's SFLOW configuration
   *
   * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSflowGetConfig(
    req: operations.ProtocolSflowGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSflow = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowGetStatistics - Show the agent's SFLOW statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolSflowGetStatistics(
    req: operations.ProtocolSflowGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowGetStatsHdr - Show the SFLOW statistics headers
   *
   * The headers of statistics fields
  **/
  protocolSflowGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/sflow/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowGetTrace - Show the agent's SFLOW traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolSflowGetTrace(
    req: operations.ProtocolSflowGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSflow = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowHalt - Halt SFLOW traffic
   *
   * Halt SFLOW traffic
  **/
  protocolSflowHalt(
    req: operations.ProtocolSflowHaltRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowHaltResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowHaltRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/halt", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowHaltResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowHalt200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowReload - Reload SFLOW configuration before resuming traffic
   *
   * Reload SFLOW configuration before resuming traffic
  **/
  protocolSflowReload(
    req: operations.ProtocolSflowReloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowReloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowReloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/reload", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowReloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowReload200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowResume - Resuming traffic
   *
   * Resuming traffic
  **/
  protocolSflowResume(
    req: operations.ProtocolSflowResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowResumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/resume", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowResume200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowSetConfig - Set the agent's SFLOW configuration
   *
   * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSflowSetConfig(
    req: operations.ProtocolSflowSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSflowSetTrace - Set the agent's SFLOW traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolSflowSetTrace(
    req: operations.ProtocolSflowSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSflowSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSflowSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
   *
   * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSnmptcpGetArgs(
    req: operations.ProtocolSnmptcpGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
   *
   * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSnmptcpGetConfig(
    req: operations.ProtocolSnmptcpGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSnmptcp = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolSnmptcpGetStatistics(
    req: operations.ProtocolSnmptcpGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
   *
   * The headers of statistics fields
  **/
  protocolSnmptcpGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/snmptcp/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolSnmptcpGetTrace(
    req: operations.ProtocolSnmptcpGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSnmptcp = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSnmptcpIpaliasDisable(
    req: operations.ProtocolSnmptcpIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasDisableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSnmptcpIpaliasEnable(
    req: operations.ProtocolSnmptcpIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasEnableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSnmptcpIpaliasIsenabled(
    req: operations.ProtocolSnmptcpIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasIsenabledRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSnmptcpIpaliasList(
    req: operations.ProtocolSnmptcpIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
   *
   * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSnmptcpSetConfig(
    req: operations.ProtocolSnmptcpSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolSnmptcpSetTrace(
    req: operations.ProtocolSnmptcpSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmptcpSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3AccessAdd - Adds a new access entry with the specified parameters.
   *
   * Adds a new access entry with the specified parameters.
  **/
  protocolSnmpv3AccessAdd(
    req: operations.ProtocolSnmpv3AccessAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3AccessClear - Clears all access entries.
   *
   * Clears all access entries.
  **/
  protocolSnmpv3AccessClear(
    req: operations.ProtocolSnmpv3AccessClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3AccessDel - Deletes the specified access entry.
   *
   * Deletes the specified access entry.
  **/
  protocolSnmpv3AccessDel(
    req: operations.ProtocolSnmpv3AccessDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3AccessList - Returns the current acccess entries as an array of strings.
   *
   * Returns the current acccess entries as an array of strings.
  **/
  protocolSnmpv3AccessList(
    req: operations.ProtocolSnmpv3AccessListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3AccessListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GetConfig - Returns the SNMPv3 configuration.
   *
   * Returns the SNMPv3 configuration.
  **/
  protocolSnmpv3GetConfig(
    req: operations.ProtocolSnmpv3GetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSnmPv3 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GetContextEngineid - Retrieves the contextEngineID for the agent instance.
   *
   * Retrieves the contextEngineID for the agent instance.
  **/
  protocolSnmpv3GetContextEngineid(
    req: operations.ProtocolSnmpv3GetContextEngineidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetContextEngineidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetContextEngineidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetContextEngineidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetContextEngineid200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GetEngineboots - Retrieves the number of times the agent has been restarted.
   *
   * Retrieves the number of times the agent has been restarted.
  **/
  protocolSnmpv3GetEngineboots(
    req: operations.ProtocolSnmpv3GetEnginebootsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEnginebootsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEnginebootsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetEnginebootsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEngineboots200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GetEngineid - For started agents, retrieves the current engineID in use by the snmpv3 module.
   *
   * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
  **/
  protocolSnmpv3GetEngineid(
    req: operations.ProtocolSnmpv3GetEngineidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEngineidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEngineidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetEngineidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEngineid200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GetEnginetime - Retrieves the time in seconds for which the agent has been running.
   *
   * Retrieves the time in seconds for which the agent has been running.
  **/
  protocolSnmpv3GetEnginetime(
    req: operations.ProtocolSnmpv3GetEnginetimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEnginetimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEnginetimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GetEnginetimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEnginetime200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GroupAdd - Adds a new group entry with the specified parameters.
   *
   * Adds a new group entry with the specified parameters.
  **/
  protocolSnmpv3GroupAdd(
    req: operations.ProtocolSnmpv3GroupAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GroupClear - Clears all group entries.
   *
   * Clears all group entries.
  **/
  protocolSnmpv3GroupClear(
    req: operations.ProtocolSnmpv3GroupClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GroupDel - Deletes the specified group entry.
   *
   * Deletes the specified group entry.
  **/
  protocolSnmpv3GroupDel(
    req: operations.ProtocolSnmpv3GroupDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3GroupList - Returns the current group entries as an array of strings.
   *
   * Returns the current group entries as an array of strings.
  **/
  protocolSnmpv3GroupList(
    req: operations.ProtocolSnmpv3GroupListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3GroupListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3SetConfig - Changes the SNMPv3 configuration.
   *
   * Changes the SNMPv3 configuration.
  **/
  protocolSnmpv3SetConfig(
    req: operations.ProtocolSnmpv3SetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3SetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3SetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3SetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3SetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3UserAdd - Adds a new user entry with the specified parameters.
   *
   * Adds a new user entry with the specified parameters.
  **/
  protocolSnmpv3UserAdd(
    req: operations.ProtocolSnmpv3UserAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3UserClear - Clears all user entries.
   *
   * Clears all user entries.
  **/
  protocolSnmpv3UserClear(
    req: operations.ProtocolSnmpv3UserClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3UserDel - Deletes the specified user entry.
   *
   * Deletes the specified user entry.
  **/
  protocolSnmpv3UserDel(
    req: operations.ProtocolSnmpv3UserDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3UserList - Returns the current user entries as a Tcl list.
   *
   * Returns the current user entries as a Tcl list.
  **/
  protocolSnmpv3UserList(
    req: operations.ProtocolSnmpv3UserListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UserListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3UsmSave - Saves current user settings in the currently loaded USM config file.
   *
   * Saves current user settings in the currently loaded USM config file.
  **/
  protocolSnmpv3UsmSave(
    req: operations.ProtocolSnmpv3UsmSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UsmSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UsmSaveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UsmSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UsmSave200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3UsmSaveas - Saves current user settings in the specified USM config file.
   *
   * Saves current user settings in the specified USM config file.
  **/
  protocolSnmpv3UsmSaveas(
    req: operations.ProtocolSnmpv3UsmSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UsmSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UsmSaveasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3UsmSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UsmSaveas200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3VacmSave - Saves current group, access, view settings in the currently loaded VACM config file.
   *
   * Saves current group, access, view settings in the currently loaded VACM config file.
  **/
  protocolSnmpv3VacmSave(
    req: operations.ProtocolSnmpv3VacmSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3VacmSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3VacmSaveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3VacmSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3VacmSave200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3VacmSaveas - Saves current group, access, view settings in the specified VACM config file.
   *
   * Saves current group, access, view settings in the specified VACM config file.
  **/
  protocolSnmpv3VacmSaveas(
    req: operations.ProtocolSnmpv3VacmSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3VacmSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3VacmSaveasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3VacmSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3VacmSaveas200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3ViewAdd - Adds a new view entry with the specified parameters.
   *
   * Adds a new view entry with the specified parameters.
  **/
  protocolSnmpv3ViewAdd(
    req: operations.ProtocolSnmpv3ViewAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3ViewClear - Clears all view entries.
   *
   * Clears all view entries.
  **/
  protocolSnmpv3ViewClear(
    req: operations.ProtocolSnmpv3ViewClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewClearRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3ViewDel - Deletes the specified view entry.
   *
   * Deletes the specified view entry.
  **/
  protocolSnmpv3ViewDel(
    req: operations.ProtocolSnmpv3ViewDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSnmpv3ViewList - Returns the current view entries as an array of strings.
   *
   * Returns the current view entries as an array of strings.
  **/
  protocolSnmpv3ViewList(
    req: operations.ProtocolSnmpv3ViewListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSnmpv3ViewListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshGetArgs - Show the agent's SSH argument structure
   *
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSshGetArgs(
    req: operations.ProtocolSshGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshGetConfig - Show the agent's SSH configuration
   *
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSshGetConfig(
    req: operations.ProtocolSshGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSsh = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshGetStatistics - Show the agent's SSH statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolSshGetStatistics(
    req: operations.ProtocolSshGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshGetStatsHdr - Show the SSH statistics headers
   *
   * The headers of statistics fields
  **/
  protocolSshGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ssh/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshGetTrace - Show the agent's SSH traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolSshGetTrace(
    req: operations.ProtocolSshGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSsh = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasDisable(
    req: operations.ProtocolSshIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasDisableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasEnable(
    req: operations.ProtocolSshIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasEnableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasIsenabled(
    req: operations.ProtocolSshIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasIsenabledRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshIpaliasList - List all IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolSshIpaliasList(
    req: operations.ProtocolSshIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshSetConfig - Set the agent's SSH configuration
   *
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSshSetConfig(
    req: operations.ProtocolSshSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSshSetTrace - Set the agent's SSH traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolSshSetTrace(
    req: operations.ProtocolSshSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSshSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSshSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogGetArgs - Show the agent's SYSLOG argument structure
   *
   * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSyslogGetArgs(
    req: operations.ProtocolSyslogGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogGetAttr - Show the outgoing message's attributes
   *
   * Attribute can be server , sequence , separator , hostname , timestamp
  **/
  protocolSyslogGetAttr(
    req: operations.ProtocolSyslogGetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetAttrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogGetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogGetConfig - Show the agent's SYSLOG configuration
   *
   * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSyslogGetConfig(
    req: operations.ProtocolSyslogGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSyslog = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogGetStatistics - Show the agent's SYSLOG statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolSyslogGetStatistics(
    req: operations.ProtocolSyslogGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogGetStatsHdr - Show the SYSLOG statistics headers
   *
   * The headers of statistics fields
  **/
  protocolSyslogGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/syslog/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogGetTrace - Show the agent's SYSLOG traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolSyslogGetTrace(
    req: operations.ProtocolSyslogGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configSyslog = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogSend - Set the agent's SYSLOG traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolSyslogSend(
    req: operations.ProtocolSyslogSendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ProtocolSyslogSendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSend200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogSetAttr - Set the outgoing message's attributes
   *
   * Attribute can be server , sequence , separator , hostname , timestamp
  **/
  protocolSyslogSetAttr(
    req: operations.ProtocolSyslogSetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSetAttrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogSetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogSetConfig - Set the agent's SYSLOG configuration
   *
   * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolSyslogSetConfig(
    req: operations.ProtocolSyslogSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolSyslogSetTrace - Set the agent's SYSLOG traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolSyslogSetTrace(
    req: operations.ProtocolSyslogSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolSyslogSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetConnectionLogon - Changes the connection's current logon.
   *
   * Logon change allows (hidden) commands for a different access mode to run.
  **/
  protocolTelnetConnectionLogon(
    req: operations.ProtocolTelnetConnectionLogonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionLogonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionLogonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetConnectionLogonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionLogon200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetConnectionRequest - Executes the command asynchronously .
   *
   * Equivalent of the command typed in by the user.
  **/
  protocolTelnetConnectionRequest(
    req: operations.ProtocolTelnetConnectionRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetConnectionRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionRequest200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
   *
   * Signal name is either connect or idle
  **/
  protocolTelnetConnectionSignal(
    req: operations.ProtocolTelnetConnectionSignalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionSignalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionSignalRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetConnectionSignalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionSignal200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetGetArgs - Show the agent's TELNET argument structure
   *
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTelnetGetArgs(
    req: operations.ProtocolTelnetGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetGetConfig - Show the agent's TELNET configuration
   *
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTelnetGetConfig(
    req: operations.ProtocolTelnetGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configTelnet = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetGetStatistics - Show the agent's TELNET statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolTelnetGetStatistics(
    req: operations.ProtocolTelnetGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetGetStatsHdr - Show the TELNET statistics headers
   *
   * The headers of statistics fields
  **/
  protocolTelnetGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/telnet/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetGetTrace - Show the agent's TELNET traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolTelnetGetTrace(
    req: operations.ProtocolTelnetGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configTelnet = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasDisable(
    req: operations.ProtocolTelnetIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasDisableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasEnable(
    req: operations.ProtocolTelnetIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasEnableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasIsenabled(
    req: operations.ProtocolTelnetIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasIsenabledRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
   *
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  protocolTelnetIpaliasList(
    req: operations.ProtocolTelnetIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetServerGetConnections - Show the agent's TELNET connections
   *
   * IDs of all connected connections
  **/
  protocolTelnetServerGetConnections(
    req: operations.ProtocolTelnetServerGetConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetConnectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetConnectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetConnections200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
   *
   * Keymap file name
  **/
  protocolTelnetServerGetKeymap(
    req: operations.ProtocolTelnetServerGetKeymapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetKeymapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetKeymapRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetKeymapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetKeymap200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
   *
   * Rules db file name
  **/
  protocolTelnetServerGetRulesdb(
    req: operations.ProtocolTelnetServerGetRulesdbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetRulesdbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetRulesdbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetRulesdbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetRulesdb200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetServerGetState - Show the agent's TELNET server state
   *
   * Return 1 means accepting connections, 0 not
  **/
  protocolTelnetServerGetState(
    req: operations.ProtocolTelnetServerGetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetState200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
   *
   * User db file name
  **/
  protocolTelnetServerGetUserdb(
    req: operations.ProtocolTelnetServerGetUserdbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetUserdbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetUserdbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetUserdbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetUserdb200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetServerGetUsers - Show the agent's TELNET users
   *
   * List of users
  **/
  protocolTelnetServerGetUsers(
    req: operations.ProtocolTelnetServerGetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetServerGetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.telnetUsers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetSetConfig - Set the agent's TELNET configuration
   *
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTelnetSetConfig(
    req: operations.ProtocolTelnetSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTelnetSetTrace - Set the agent's TELNET traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolTelnetSetTrace(
    req: operations.ProtocolTelnetSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTelnetSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpGetArgs - Show the agent's TFTP argument structure
   *
   * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTftpGetArgs(
    req: operations.ProtocolTftpGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpGetConfig - Show the agent's TFTP configuration
   *
   * Agent's TFTP configuration
  **/
  protocolTftpGetConfig(
    req: operations.ProtocolTftpGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configTftp = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpGetStatistics - Show the agent's TFTP statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolTftpGetStatistics(
    req: operations.ProtocolTftpGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpGetStatsHdr - Show the TFTP statistics headers
   *
   * The headers of statistics fields
  **/
  protocolTftpGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/tftp/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpGetTrace - Show the agent's TFTP traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolTftpGetTrace(
    req: operations.ProtocolTftpGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configTftp = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
   *
   * Parameter is server , port , or dstfile
  **/
  protocolTftpSessionGetParameter(
    req: operations.ProtocolTftpSessionGetParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionGetParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionGetParameterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionGetParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionGetParameter200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSessionRead - Create a read session to download srcfile from server
   *
   * Session ID is returned
  **/
  protocolTftpSessionRead(
    req: operations.ProtocolTftpSessionReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionRead200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
   *
   * Parameter is server , port , or dstfile
  **/
  protocolTftpSessionSetParameter(
    req: operations.ProtocolTftpSessionSetParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionSetParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionSetParameterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionSetParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionSetParameter200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSessionStart - Start a TFTP sesssion
   *
   * Start uploading or downloading the file
  **/
  protocolTftpSessionStart(
    req: operations.ProtocolTftpSessionStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStart200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSessionStatus - Check a TFTP sesssion's status
   *
   * Status includes running state, bytes transfered, and time elapsed
  **/
  protocolTftpSessionStatus(
    req: operations.ProtocolTftpSessionStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStatus200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSessionStop - Stop a TFTP sesssion
   *
   * Stop uploading or downloading the file
  **/
  protocolTftpSessionStop(
    req: operations.ProtocolTftpSessionStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSessionWrite - Create a read session to upload srcfile to server
   *
   * Session ID is returned
  **/
  protocolTftpSessionWrite(
    req: operations.ProtocolTftpSessionWriteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionWriteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionWriteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSessionWriteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionWrite200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSetConfig - Set the agent's TFTP configuration
   *
   * Agent's TFTP configuration
  **/
  protocolTftpSetConfig(
    req: operations.ProtocolTftpSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTftpSetTrace - Set the agent's TFTP traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolTftpSetTrace(
    req: operations.ProtocolTftpSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTftpSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodGetArgs - Show the agent's TOD argument structure
   *
   * Agent's TOD configuration
  **/
  protocolTodGetArgs(
    req: operations.ProtocolTodGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTodGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodGetConfig - Show the agent's TOD configuration
   *
   * Agent's TOD configuration
  **/
  protocolTodGetConfig(
    req: operations.ProtocolTodGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configTod = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodGetStatistics - Show the agent's TOD statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolTodGetStatistics(
    req: operations.ProtocolTodGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTodGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodGetStatsHdr - Show the TOD statistics headers
   *
   * The headers of statistics fields
  **/
  protocolTodGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/tod/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTodGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodGetTrace - Show the agent's TOD traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolTodGetTrace(
    req: operations.ProtocolTodGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configTod = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodGettime - Retrieve TOD time
   *
   * Retrive time from server
  **/
  protocolTodGettime(
    req: operations.ProtocolTodGettimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGettimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGettimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodGettimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTodGettime200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodSetConfig - Set the agent's TOD configuration
   *
   * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolTodSetConfig(
    req: operations.ProtocolTodSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTodSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolTodSetTrace - Set the agent's TOD traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolTodSetTrace(
    req: operations.ProtocolTodSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolTodSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolTodSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebGetArgs - Show the agent's WEB argument structure
   *
   * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolWebGetArgs(
    req: operations.ProtocolWebGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetArgsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/args", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebGetConfig - Show the agent's WEB configuration
   *
   * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolWebGetConfig(
    req: operations.ProtocolWebGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/config", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configWeb = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebGetStatistics - Show the agent's WEB statistics
   *
   * Statistics of fields indicated in the headers
  **/
  protocolWebGetStatistics(
    req: operations.ProtocolWebGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetStatisticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebGetStatsHdr - Show the WEB statistics headers
   *
   * The headers of statistics fields
  **/
  protocolWebGetStatsHdr(
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetStatsHdrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/web/get/stats_hdr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebGetTrace - Show the agent's WEB traffic tracing
   *
   * Trace 1 means enabled, 0 means not
  **/
  protocolWebGetTrace(
    req: operations.ProtocolWebGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/trace", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configWeb = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebPortAdd - Add the agent's WEB port
   *
   * Add port
  **/
  protocolWebPortAdd(
    req: operations.ProtocolWebPortAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebPortAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebPortExists - Show the agent's WEB port
   *
   * Check the port. 1 means existing, 0 means not
  **/
  protocolWebPortExists(
    req: operations.ProtocolWebPortExistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortExistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortExistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebPortExistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortExists200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebPortRemove - Remove the agent's WEB port
   *
   * Remove port
  **/
  protocolWebPortRemove(
    req: operations.ProtocolWebPortRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortRemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebPortRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortRemove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebPortSet - Set the agent's WEB port attribute
   *
   * Set port
  **/
  protocolWebPortSet(
    req: operations.ProtocolWebPortSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebPortSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortSet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebPortStart - Start the agent's WEB port
   *
   * Start port
  **/
  protocolWebPortStart(
    req: operations.ProtocolWebPortStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebPortStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortStart200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebPortStop - Stop the agent's WEB port
   *
   * Stop port
  **/
  protocolWebPortStop(
    req: operations.ProtocolWebPortStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebPortStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortStop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebSetConfig - Set the agent's WEB configuration
   *
   * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  protocolWebSetConfig(
    req: operations.ProtocolWebSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebSetConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * protocolWebSetTrace - Set the agent's WEB traffic tracing
   *
   * 1 to enable, 0 to disable
  **/
  protocolWebSetTrace(
    req: operations.ProtocolWebSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebSetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProtocolWebSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protocolWebSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reload - Reload the current agent.
   *
   * This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
  **/
  reload(
    req: operations.ReloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/reload", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reload200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * remove - Remove an entry from a table.
   *
   * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
  **/
  remove(
    req: operations.RemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/remove/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.remove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * resume - Resume the current agent.
   *
   * Resume the current agent.
  **/
  resume(
    req: operations.ResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/resume", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resume200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * save - Save agent MIB values.
   *
   * Save agent MIB values.
  **/
  save(
    req: operations.SaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SaveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/save", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.save200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setDelay - one-way transit delay in msec
   *
   * The minimum granularity is 10 msec.
  **/
  setDelay(
    req: operations.SetDelayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetDelayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetDelayRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/delay/{delay}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetDelayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setDelay200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setDrops - drop rate (every N-th PDU)
   *
   * 0 means no drops
  **/
  setDrops(
    req: operations.SetDropsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetDropsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetDropsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/drops/{drops}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetDropsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setDrops200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setHost - host address of the agent.
   *
   * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
  **/
  setHost(
    req: operations.SetHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetHostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/host/{host}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setHost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setInformTimeout - timeout in seconds for retransmitting INFORM PDUs
   *
   * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
  **/
  setInformTimeout(
    req: operations.SetInformTimeoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetInformTimeoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetInformTimeoutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetInformTimeoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setInformTimeout200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setInterface - network interface card for the agent
   *
   * network interface card for the agent
  **/
  setInterface(
    req: operations.SetInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetInterfaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/interface/{interface}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setInterface200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setLog - The current log file for the Simulator.
   *
   * The current log file for the Simulator.
  **/
  setLog(
    req: operations.SetLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetLogRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/set/log";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SetLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setLog200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setMask - subnet mask of the agent.
   *
   * subnet mask of the agent.
  **/
  setMask(
    req: operations.SetMaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetMaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetMaskRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/mask/{mask}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetMaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setMask200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setMibs - set of MIBs, simulations and scenarios
   *
   * set of MIBs, simulations and scenarios
  **/
  setMibs(
    req: operations.SetMibsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetMibsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetMibsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/mibs", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SetMibsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setMibs200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setNetdev - The network address of the host where the MIMIC simulator is running.
   *
   * The network address of the host where the MIMIC simulator is running.
  **/
  setNetdev(
    config?: AxiosRequestConfig
  ): Promise<operations.SetNetdevResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/set/netdev";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetNetdevResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setNetdev200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setOiddir - MIB directory of the agent.
   *
   * MIB directory of the agent.
  **/
  setOiddir(
    req: operations.SetOiddirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetOiddirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetOiddirRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/oiddir/{oiddir}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetOiddirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setOiddir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setOwner - owner of the agent
   *
   * owner of the agent
  **/
  setOwner(
    req: operations.SetOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetOwnerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/owner/{owner}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setOwner200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setPdusize - maximum PDU size
   *
   * The limit for this configurable is 65536
  **/
  setPdusize(
    req: operations.SetPdusizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetPdusizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetPdusizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/pdusize/{pdusize}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetPdusizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setPdusize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setPort - port number
   *
   * port number
  **/
  setPort(
    req: operations.SetPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetPortRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/port/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setPort200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setPrivdir - private directory of the agent.
   *
   * private directory of the agent.
  **/
  setPrivdir(
    req: operations.SetPrivdirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetPrivdirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetPrivdirRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/privdir/{privdir}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetPrivdirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setPrivdir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setProtocols - protocols supported by agent as a comma-separated list
   *
   * protocols supported by agent as a comma-separated list
  **/
  setProtocols(
    req: operations.SetProtocolsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetProtocolsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetProtocolsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/protocol", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SetProtocolsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setProtocols200ApplicationJsonStringIntegers = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setReadCommunity - read community string
   *
   * read community string
  **/
  setReadCommunity(
    req: operations.SetReadCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetReadCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetReadCommunityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/read/{read}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetReadCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setReadCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setStarttime - relative start time
   *
   * relative start time
  **/
  setStarttime(
    req: operations.SetStarttimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetStarttimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetStarttimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/start/{start}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetStarttimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setStarttime200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setState - Set the state of a MIB object object
   *
   * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
  **/
  setState(
    req: operations.SetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/state/set/{object}/{state}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setState200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setTrace - SNMP PDU tracing
   *
   * SNMP PDU tracing
  **/
  setTrace(
    req: operations.SetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetTraceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/trace/{trace}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setTrace200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setValidate - SNMP SET validation policy
   *
   * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
  **/
  setValidate(
    req: operations.SetValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetValidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/validate/{validate}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setValidate200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setValue - Set a variable in the Value Space.
   *
   * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
  **/
  setValue(
    req: operations.SetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.SetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setWriteCommunity - write community string
   *
   * write community string
  **/
  setWriteCommunity(
    req: operations.SetWriteCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetWriteCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetWriteCommunityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/write/{write}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetWriteCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setWriteCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * splitOid - Split the numerical OID into the object OID and instance OID.
   *
   * This is useful if you have an OID which is a combination of object and instance.
  **/
  splitOid(
    req: operations.SplitOidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SplitOidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SplitOidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/split/{OID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SplitOidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.splitOid200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * start - Start the current agent.
   *
   * For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
  **/
  start(
    req: operations.StartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/start", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.start200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * startAllAgents - Start MIMIC.
   *
   * Start MIMIC.
  **/
  startAllAgents(
    config?: AxiosRequestConfig
  ): Promise<operations.StartAllAgentsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/start";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartAllAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startAllAgents200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * startIpalias - Starts an existing ipalias for the agent.
   *
   * port defaults to 161 if not specified.
  **/
  startIpalias(
    req: operations.StartIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartIpaliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * statusIpalias - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
   *
   * port defaults to 161 if not specified.
  **/
  statusIpalias(
    req: operations.StatusIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StatusIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StatusIpaliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StatusIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.statusIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stop - Show the agent's primary IP address
   *
   * Agent primary IP address
  **/
  stop(
    req: operations.StopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/stop", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stopAllAgents - Stop MIMIC.
   *
   * Stop MIMIC.
  **/
  stopAllAgents(
    config?: AxiosRequestConfig
  ): Promise<operations.StopAllAgentsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/stop";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StopAllAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stopAllAgents200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * stopIpalias - Stops an existing ipalias for the agent.
   *
   * port defaults to 161 if not specified.
  **/
  stopIpalias(
    req: operations.StopIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopIpaliasRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StopIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stopIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storeExists - This command can be used as a predicate to ascertain the existence of a given variable.
   *
   * It returns "1" if the variable exists, else "0".
  **/
  storeExists(
    req: operations.StoreExistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreExistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreExistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/exists/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoreExistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storeExists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storeGet - Fetches the value associated with a variable.
   *
   * The value will be returned as a string (like all Tcl values).
  **/
  storeGet(
    req: operations.StoreGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/get/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoreGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storeGet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storeList - This command will return the list of variables in the said scope.
   *
   * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
  **/
  storeList(
    config?: AxiosRequestConfig
  ): Promise<operations.StoreListResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/store/list";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoreListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storeList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storeLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
   *
   * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
  **/
  storeLreplace(
    req: operations.StoreLreplaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreLreplaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreLreplaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/lreplace/{var}/{index}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.StoreLreplaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storeLreplace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
   *
   * It returns "1" if the variable is persistent, else "0".
  **/
  storePersists(
    req: operations.StorePersistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorePersistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorePersistsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/persists/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StorePersistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storePersists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storeSave - This operation flushes all global objects which need to be made persistent to disk.
   *
   * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
  **/
  storeSave(
    config?: AxiosRequestConfig
  ): Promise<operations.StoreSaveResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/set/persistent";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoreSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storeSave200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storeSet - Set the variable store for the global storage
   *
   * Persist 1 means persistent , 0 means non-persistent
  **/
  storeSet(
    req: operations.StoreSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreSetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/set/{var}/{persist}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.StoreSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storeSet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * storeUnset - Deletes a variable which is currently defined.
   *
   * This will cleanup persistent variables if needed
  **/
  storeUnset(
    req: operations.StoreUnsetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreUnsetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreUnsetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/unset/{var}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoreUnsetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.storeUnset200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * terminate - Terminate the MIMIC daemon.
   *
   * Terminate the MIMIC daemon.
  **/
  terminate(
    config?: AxiosRequestConfig
  ): Promise<operations.TerminateResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/terminate";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TerminateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.terminate200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * trapConfigAdd - Add a trap destination to the set of destinations.
   *
   * Add a trap destination to the set of destinations.
  **/
  trapConfigAdd(
    req: operations.TrapConfigAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapConfigAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapConfigAddRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TrapConfigAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trapConfigAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * trapConfigDel - Remove a trap destination from the set of destinations.
   *
   * Remove a trap destination from the set of destinations.
  **/
  trapConfigDel(
    req: operations.TrapConfigDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapConfigDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapConfigDelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TrapConfigDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trapConfigDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * trapConfigList - List the set of trap destinations for this agent instance.
   *
   * Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
  **/
  trapConfigList(
    req: operations.TrapConfigListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapConfigListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapConfigListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TrapConfigListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trapDests = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * trapList - List the outstanding asynchronous traps for this agent instance.
   *
   * List the outstanding asynchronous traps for this agent instance.
  **/
  trapList(
    req: operations.TrapListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/list", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TrapListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.trapList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unsetValue - Unset a variable in the Value Space in order to free its memory.
   *
   * Only variables that have previously been set can be unset.
  **/
  unsetValue(
    req: operations.UnsetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsetValueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnsetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.unsetValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
