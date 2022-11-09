import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}

// SDK Documentation: https://www.gambitcomm.com/site/about.php - Find out more about Gambit
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
  
  // AccessAdd - Adds/Overwrites the user entry in the access control database.
  /** 
   * Adds/Overwrites the user entry in the access control database.
  **/
  AccessAdd(
    req: operations.AccessAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/add/{user}/{agents}/{mask}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessDel - Clears a users entry from access control database.
  /** 
   * Using '*' for user clears all the users.
  **/
  AccessDel(
    req: operations.AccessDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessDelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/del/{user}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessGetAcldb - Returns the current access control database in use.
  /** 
   * If nothing is specified then this returns "".
  **/
  AccessGetAcldb(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetAcldbResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/acldb";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessGetAcldbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessGetAcldb200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessGetAdmindir - Returns the current admin directory.
  /** 
   * If nothing is specified in admin/settings.cfg then returns "". If no admin directory is specified then the shared area will be used where needed (e.g. for persistent info, access control data files etc. )
  **/
  AccessGetAdmindir(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetAdmindirResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/admindir";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessGetAdmindirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessGetAdmindir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessGetAdminuser - Returns the current administrator.
  /** 
   * If nothing is specified in admin/settings.cfg then returns "".
  **/
  AccessGetAdminuser(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetAdminuserResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/adminuser";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessGetAdminuserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessGetAdminuser200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessGetEnabled - Returns the state of access control checking.
  /** 
   * 0 indicates that it is disabled, 1 indicates it is enabled.
  **/
  AccessGetEnabled(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AccessGetEnabledResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/get/enabled";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessGetEnabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessGetEnabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessList - Returns an array of entries.
  /** 
   * Each entry consists of user, agents (in minimal range representation) and access mask (not used currently).
  **/
  AccessList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AccessListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/access/list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessEntries = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessLoad - Loads the specified file for access control data.
  /** 
   * If filename is not specified then the currently set 'acldb' parameter is used.
  **/
  AccessLoad(
    req: operations.AccessLoadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessLoadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessLoadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/load/{filename}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessLoadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessLoad200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessSave - Saves current access control data in specified file.
  /** 
   * If filename is not specified then the currently set 'acldb' parameter is used.
  **/
  AccessSave(
    req: operations.AccessSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessSaveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/save/{filename}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessSave200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessSetAcldb - Allows setting the name of the current access control database.
  /** 
   * This will be used for subsequent load and save operations.
  **/
  AccessSetAcldb(
    req: operations.AccessSetAcldbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessSetAcldbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessSetAcldbRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/set/acldb/{databaseName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessSetAcldbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessSetAcldb200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AccessSetEnabled - Allows the user to enable/disable the access control check.
  /** 
   * 0 indicates disabled, 1 indicates enabled.
  **/
  AccessSetEnabled(
    req: operations.AccessSetEnabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessSetEnabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessSetEnabledRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/access/set/enabled/{enabledOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AccessSetEnabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessSetEnabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Add - Add an entry to a table.
  /** 
   * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
  **/
  Add(
    req: operations.AddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/add/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.add200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddDaemonTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
  /** 
   * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
  **/
  AddDaemonTimerScript(
    req: operations.AddDaemonTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddDaemonTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddDaemonTimerScriptRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/timer/script/add/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddDaemonTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.addDaemonTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddIpalias - Adds a new ipalias for the agent.
  /** 
   * port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.
  **/
  AddIpalias(
    req: operations.AddIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddIpaliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/add/{IP}/{port}/{mask}/{interface}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.addIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AddTimerScript - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
  /** 
   * Add a new timer script to be executed at specified interval (in msec) with the specified argument.
  **/
  AddTimerScript(
    req: operations.AddTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddTimerScriptRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/add/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.addTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentRemove - Remove the current agent.
  /** 
   * For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.
  **/
  AgentRemove(
    req: operations.AgentRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentRemoveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/remove", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentRemove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStoreCopy - This command copies the variable store from the other agent to this agent.
  /** 
   * This command copies the variable store from the other agent to this agent.
  **/
  AgentStoreCopy(
    req: operations.AgentStoreCopyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreCopyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreCopyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/copy/{otherAgent}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentStoreCopyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStoreCopy200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
  /** 
   * It returns "1" if the variable exists, else "0".
  **/
  AgentStoreExists(
    req: operations.AgentStoreExistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreExistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreExistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/exists/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentStoreExistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStoreExists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStoreGet - Fetches the value associated with a variable.
  /** 
   * The value will be returned as a string (like all Tcl values).
  **/
  AgentStoreGet(
    req: operations.AgentStoreGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/get/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentStoreGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStoreGet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStoreList - This command will return the list of variables in the said scope.
  /** 
   * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
  **/
  AgentStoreList(
    req: operations.AgentStoreListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentStoreListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStoreList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
  /** 
   * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
  **/
  AgentStoreLreplace(
    req: operations.AgentStoreLreplaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreLreplaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreLreplaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/lreplace/{var}/{index}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AgentStoreLreplaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStoreLreplace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
  /** 
   * It returns "1" if the variable is persistent, else "0".
  **/
  AgentStorePersists(
    req: operations.AgentStorePersistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStorePersistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStorePersistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/persists/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentStorePersistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStorePersists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStoreSet - These commands allow the creation of a new variable, or changing an existing value.
  /** 
   * The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.
  **/
  AgentStoreSet(
    req: operations.AgentStoreSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/set/{var}/{persist}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AgentStoreSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStoreSet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentStoreUnset - Deletes a variable which is currently defined.
  /** 
   * This will cleanup persistent variables if needed
  **/
  AgentStoreUnset(
    req: operations.AgentStoreUnsetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentStoreUnsetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentStoreUnsetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/store/unset/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentStoreUnsetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStoreUnset200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CfgLoad - Load the lab configuration file file.
  /** 
   * Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration
  **/
  CfgLoad(
    req: operations.CfgLoadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CfgLoadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CfgLoadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/load/{cfgFile}/{firstAgentNum}/{lastAgentNum}/{startAgentNum}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CfgLoadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cfgLoad200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CfgNew - Clear the lab configuration.
  /** 
   * Clear the lab configuration.
  **/
  CfgNew(
    req: operations.CfgNewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CfgNewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CfgNewRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/clear/{firstAgentNum}/{lastAgentNum}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CfgNewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cfgNew200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CfgSave - Save the lab configuration.
  /** 
   * Save the lab configuration.
  **/
  CfgSave(
    
    config?: AxiosRequestConfig
  ): Promise<operations.CfgSaveResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/save";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CfgSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cfgSave200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CfgSaveas - Save the lab configuration in file.
  /** 
   * Save the lab configuration in file.
  **/
  CfgSaveas(
    req: operations.CfgSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CfgSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CfgSaveasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/saveas/{cfgFile}/{firstAgentNum}/{lastAgentNum}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CfgSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cfgSaveas200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DelDaemonTimerScript - Remove a timer script from the execution list.
  /** 
   * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
  **/
  DelDaemonTimerScript(
    req: operations.DelDaemonTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DelDaemonTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DelDaemonTimerScriptRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/timer/script/delete/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DelDaemonTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.delDaemonTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DelIpalias - Deletes an existing ipalias from the agent.
  /** 
   * port defaults to 161 if not specified.
  **/
  DelIpalias(
    req: operations.DelIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DelIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DelIpaliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/delete/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DelIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.delIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DelTimerScript - Remove a timer script from the execution list.
  /** 
   * The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.
  **/
  DelTimerScript(
    req: operations.DelTimerScriptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DelTimerScriptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DelTimerScriptRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/delete/{script}/{interval}/{arg}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DelTimerScriptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.delTimerScript200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // EvalValue - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
  /** 
   * Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
  **/
  EvalValue(
    req: operations.EvalValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EvalValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EvalValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/eval/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.EvalValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.evalValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FromAdd - Add a source address that the agent will accept messages from.
  /** 
   * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
  **/
  FromAdd(
    req: operations.FromAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FromAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FromAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/add/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FromAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fromAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FromDel - delete a source address that the agent will accept messages from.
  /** 
   * An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.
  **/
  FromDel(
    req: operations.FromDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FromDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FromDelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/delete/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FromDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.fromDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FromList - List the source addresses that the agent will accept messages from.
  /** 
   * This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.
  **/
  FromList(
    req: operations.FromListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FromListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FromListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/from/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FromListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ipSources = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetActiveDataList - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
  /** 
   * This list is guaranteed to be sorted into increasing order.
  **/
  GetActiveDataList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetActiveDataListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/active_data_list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetActiveDataListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getActiveDataList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetActiveList - The list of {agentnum} that are currently active (running or paused).
  /** 
   * This list is guaranteed to be sorted into increasing order.
  **/
  GetActiveList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetActiveListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/active_list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetActiveListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getActiveList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAgentState - current running state of the agent
  /** 
   * 0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping
  **/
  GetAgentState(
    req: operations.GetAgentStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgentStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgentStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/state", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAgentStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAgentState200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCfgFileChanged - This predicate indicates if the currently loaded agent configuration file has changed.
  /** 
   * Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.
  **/
  GetCfgFileChanged(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCfgFileChangedResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/cfgfile_changed";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCfgFileChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCfgFileChanged200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetCfgfile - The currently loaded lab configuration file for the particular user.
  /** 
   * In the case of multi-user access this command returns a different configuration file loaded for each user.
  **/
  GetCfgfile(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCfgfileResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/cfgfile";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCfgfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCfgfile200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChanged - has the agent value space changed?
  /** 
   * has the agent value space changed?
  **/
  GetChanged(
    req: operations.GetChangedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetChangedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetChangedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/changed", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getChanged200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChangedConfigList - The list of {agentnum} for which a configurable parameter changed.
  /** 
   * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
  **/
  GetChangedConfigList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetChangedConfigListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/changed_config_list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetChangedConfigListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getChangedConfigList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetChangedStateList - The list of {agentnum state} for which the state changed.
  /** 
   * This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.
  **/
  GetChangedStateList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetChangedStateListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/changed_state_list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetChangedStateListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agentStates = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetClients - The number of clients currently connected to the daemon.
  /** 
   * The number of clients currently connected to the daemon.
  **/
  GetClients(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetClientsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/clients";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getClients200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConfigChanged - has the lab configuration changed?
  /** 
   * has the lab configuration changed?
  **/
  GetConfigChanged(
    req: operations.GetConfigChangedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigChangedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetConfigChangedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/config_changed", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConfigChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getConfigChanged200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetConfiguredList - The list of {agentnum} that are currently configured.
  /** 
   * This list is guaranteed to be sorted into increasing order.
  **/
  GetConfiguredList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfiguredListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/configured_list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConfiguredListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getConfiguredList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDaemonProtocols - The set of protocols supported by the Simulator.
  /** 
   * The set of protocols supported by the Simulator.
  **/
  GetDaemonProtocols(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetDaemonProtocolsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/protocols";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDaemonProtocolsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDaemonProtocols200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDelay - one-way transit delay in msec.
  /** 
   * The minimum granularity is 10 msec.
  **/
  GetDelay(
    req: operations.GetDelayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDelayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDelayRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/delay", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDelayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDelay200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDrops - drop rate (every N-th PDU). 0 means no drops.
  /** 
   * drop rate (every N-th PDU). 0 means no drops.
  **/
  GetDrops(
    req: operations.GetDropsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDropsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDropsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/drops", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDropsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDrops200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetHost - host address of the agent.
  /** 
   * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
  **/
  GetHost(
    req: operations.GetHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/host", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getHost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInfo - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
  /** 
   * Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
  **/
  GetInfo(
    req: operations.GetInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/info/{object}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInfo200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInformTimeout - timeout in seconds for retransmitting INFORM PDUs.
  /** 
   * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
  **/
  GetInformTimeout(
    req: operations.GetInformTimeoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInformTimeoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInformTimeoutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/inform_timeout", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInformTimeoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInformTimeout200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInstances - Display the MIB object instances for the specified object.
  /** 
   * This enables MIB browsing of the MIB on the current agent.
  **/
  GetInstances(
    req: operations.GetInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInstancesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/instances/{object}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInstances200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInterface - network interface card for the agent.
  /** 
   * network interface card for the agent.
  **/
  GetInterface(
    req: operations.GetInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetInterfaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/interface", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInterface200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetInterfaces - The set of network interfaces that can be used for simulations.
  /** 
   * The set of network interfaces that can be used for simulations.
  **/
  GetInterfaces(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetInterfacesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/interfaces";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInterfacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInterfaces200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLast - The last configured agent instance.
  /** 
   * The last configured agent instance.
  **/
  GetLast(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetLastResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/last";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLastResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLast200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLog - The current log file for the Simulator.
  /** 
   * The current log file for the Simulator.
  **/
  GetLog(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetLogResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/log";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLog200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMask - subnet mask of the agent.
  /** 
   * subnet mask of the agent.
  **/
  GetMask(
    req: operations.GetMaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMaskRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/mask", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMask200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMax - The maximum number of agent instances.
  /** 
   * The maximum number of agent instances.
  **/
  GetMax(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetMaxResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/max";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMax200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMib - Return the MIB that defines the specified object.
  /** 
   * This will only return a MIB name if the object is unmistakeably defined in a MIB.
  **/
  GetMib(
    req: operations.GetMibRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMibResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMibRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/mib/{object}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMibResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMib200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMibs - set of MIBs, simulations and scenarios
  /** 
   * set of MIBs, simulations and scenarios
  **/
  GetMibs(
    req: operations.GetMibsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMibsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMibsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/mibs", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMibsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.triplets = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetName - Return the symbolic name of the specified object identifier.
  /** 
   * Return the symbolic name of the specified object identifier.
  **/
  GetName(
    req: operations.GetNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/name/{OID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getName200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNetaddr - The network address of the host where the MIMIC simulator is running.
  /** 
   * The network address of the host where the MIMIC simulator is running.
  **/
  GetNetaddr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetaddrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/netaddr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNetaddrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getNetaddr200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNetdev - The default network device to be used for agent addresses.
  /** 
   * The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.
  **/
  GetNetdev(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetNetdevResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/netdev";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNetdevResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getNetdev200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetNumberStarts - number of starts for the agent.
  /** 
   * This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.
  **/
  GetNumberStarts(
    req: operations.GetNumberStartsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNumberStartsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNumberStartsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/num_starts", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNumberStartsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getNumberStarts200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetObjects - Display the MIB objects below the current position
  /** 
   * This command is similar to the ls or dir operating system commands to list filesystem directories.
  **/
  GetObjects(
    req: operations.GetObjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetObjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetObjectsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/list/{OID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetObjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getObjects200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOid - Return the numeric OID of the specified object.
  /** 
   * Return the numeric OID of the specified object.
  **/
  GetOid(
    req: operations.GetOidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/oid/{object}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOid200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOiddir - MIB directory of the agent.
  /** 
   * MIB directory of the agent.
  **/
  GetOiddir(
    req: operations.GetOiddirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOiddirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOiddirRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/oiddir", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOiddirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOiddir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetOwner - owner of the agent.
  /** 
   * owner of the agent.
  **/
  GetOwner(
    req: operations.GetOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOwnerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/owner", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOwner200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPdusize - maximum PDU size.
  /** 
   * The limit for this configurable is 65536.
  **/
  GetPdusize(
    req: operations.GetPdusizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPdusizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPdusizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/pdusize", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPdusizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPdusize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPort - port number
  /** 
   * port number
  **/
  GetPort(
    req: operations.GetPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPortRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/port", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPort200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetPrivdir - private directory of the agent.
  /** 
   * private directory of the agent.
  **/
  GetPrivdir(
    req: operations.GetPrivdirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPrivdirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPrivdirRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/privdir", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPrivdirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPrivdir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProduct - The product number that is licensed.
  /** 
   * The product number that is licensed.
  **/
  GetProduct(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/product";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getProduct200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetProtocols - protocols supported by agent
  /** 
   * protocols supported by agent as an array of strings
  **/
  GetProtocols(
    req: operations.GetProtocolsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProtocolsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProtocolsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/protocol", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetProtocolsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getProtocols200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReadCommunity - read community string
  /** 
   * read community string
  **/
  GetReadCommunity(
    req: operations.GetReadCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReadCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReadCommunityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/read", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReadCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getReadCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetReturn - The return mode.
  /** 
   * The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)
  **/
  GetReturn(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetReturnResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/return";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetReturnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getReturn200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetScen - first scenario name
  /** 
   * first scenario name
  **/
  GetScen(
    req: operations.GetScenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetScenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetScenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/scen", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetScenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getScen200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSim - first simulation name
  /** 
   * first simulation name
  **/
  GetSim(
    req: operations.GetSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSimRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/sim", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSim200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStarttime - relative start time
  /** 
   * relative start time
  **/
  GetStarttime(
    req: operations.GetStarttimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStarttimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStarttimeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/start", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStarttimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getStarttime200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetState - Get the state of a MIB object object.
  /** 
   * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
  **/
  GetState(
    req: operations.GetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/state/get/{object}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getState200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStateChanged - has the agent state changed?
  /** 
   * has the agent state changed?
  **/
  GetStateChanged(
    req: operations.GetStateChangedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStateChangedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStateChangedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/state_changed", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStateChangedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getStateChanged200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetStatistics - current statistics of the agent instance
  /** 
   * The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT
  **/
  GetStatistics(
    req: operations.GetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTrace - SNMP PDU tracing
  /** 
   * SNMP PDU tracing
  **/
  GetTrace(
    req: operations.GetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTrace200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetValidate - SNMP SET validation policy.
  /** 
   * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access
  **/
  GetValidate(
    req: operations.GetValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetValidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/validate", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getValidate200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetValue - Get a variable in the Value Space.
  /** 
   * Get a variable in the Value Space.
  **/
  GetValue(
    req: operations.GetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/get/{object}/{instance}/{variable}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVariables - Display the variables for the specified instance instance for the specified MIB object object
  /** 
   * This enables variable browsing of the MIB on the current agent.
  **/
  GetVariables(
    req: operations.GetVariablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariablesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/variables/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVariablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVariables200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetVersion - The version of the MIMIC command interface.
  /** 
   * The version of the MIMIC command interface.
  **/
  GetVersion(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetVersionResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/get/version";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getVersion200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetWriteCommunity - write community string
  /** 
   * write community string
  **/
  GetWriteCommunity(
    req: operations.GetWriteCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWriteCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWriteCommunityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/get/write", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetWriteCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getWriteCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Halt - Halt the current agent.
  /** 
   * Halt the current agent.
  **/
  Halt(
    req: operations.HaltRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HaltResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HaltRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/halt", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.HaltResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.halt200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDaemonTimerScripts - List the timer scripts currently running along with the their intervals.
  /** 
   * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
  **/
  ListDaemonTimerScripts(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListDaemonTimerScriptsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/timer/script/list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDaemonTimerScriptsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.timerScripts = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListIpaliases - Lists all the additional ipaliases configured for the agent.
  /** 
   * The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.
  **/
  ListIpaliases(
    req: operations.ListIpaliasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIpaliasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIpaliasesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListIpaliasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTimerScripts - List the timer scripts currently running along with the their intervals.
  /** 
   * The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.
  **/
  ListTimerScripts(
    req: operations.ListTimerScriptsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTimerScriptsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTimerScriptsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/timer/script/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListTimerScriptsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.timerScripts = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MgetInfo - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
  /** 
   * Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
  **/
  MgetInfo(
    req: operations.MgetInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MgetInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MgetInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/mget/{infoArray}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MgetInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.mgetInfo200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MsetValue - Set multiple variables in the Value Space.
  /** 
   * This is a performance optimization of the mimic value set command, to be used when many variables are to be set.
  **/
  MsetValue(
    req: operations.MsetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MsetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MsetValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/mset", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.MsetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.msetValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MunsetValue - Unset multiple variables in the Value Space
  /** 
   * This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.
  **/
  MunsetValue(
    req: operations.MunsetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MunsetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MunsetValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/munset", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.MunsetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.munsetValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // New - Add an agent.
  /** 
   * Add an agent.
  **/
  New(
    req: operations.NewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NewRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/add/{IP}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.NewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.new200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PauseNow - Pause the current agent.
  /** 
   * Pause the current agent.
  **/
  PauseNow(
    req: operations.PauseNowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PauseNowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PauseNowRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/pause", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PauseNowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.pauseNow200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolCoapGetArgs - Show the agent's COAP argument structure
  /** 
   * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolCoapGetArgs(
    req: operations.ProtocolCoapGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolCoapGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolCoapGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolCoapGetConfig - Show the agent's COAP configuration
  /** 
   * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolCoapGetConfig(
    req: operations.ProtocolCoapGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolCoapGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configCoap = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolCoapGetStatistics - Show the agent's COAP statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolCoapGetStatistics(
    req: operations.ProtocolCoapGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolCoapGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolCoapGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolCoapGetStatsHdr - Show the COAP statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolCoapGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/coap/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolCoapGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolCoapGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolCoapGetTrace - Show the agent's COAP traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolCoapGetTrace(
    req: operations.ProtocolCoapGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolCoapGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configCoap = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolCoapSetConfig - Set the agent's COAP configuration
  /** 
   * Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolCoapSetConfig(
    req: operations.ProtocolCoapSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolCoapSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolCoapSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolCoapSetTrace - Set the agent's COAP traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolCoapSetTrace(
    req: operations.ProtocolCoapSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolCoapSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolCoapSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/coap/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolCoapSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolCoapSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpGetArgs - Show the agent's DHCP argument structure
  /** 
   * Agent's DHCP configuration particulars
  **/
  ProtocolDhcpGetArgs(
    req: operations.ProtocolDhcpGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpGetConfig - Show the agent's DHCP configuration
  /** 
   * Agent's DHCP configuration hwaddr,classid,add_options,script
  **/
  ProtocolDhcpGetConfig(
    req: operations.ProtocolDhcpGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configDhcp = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpGetStatistics - Show the agent's DHCP statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolDhcpGetStatistics(
    req: operations.ProtocolDhcpGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpGetStatsHdr - Show the DHCP statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolDhcpGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/dhcp/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpGetTrace - Show the agent's DHCP traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolDhcpGetTrace(
    req: operations.ProtocolDhcpGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configDhcp = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpParams - Show the parameters configured by the server in its DHCP-OFFER message
  /** 
   * DHCP-OFFER message parameters
  **/
  ProtocolDhcpParams(
    req: operations.ProtocolDhcpParamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpParamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpParamsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/params", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpParamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpParams200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpSetConfig - Set the agent's DHCP configuration
  /** 
   * Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolDhcpSetConfig(
    req: operations.ProtocolDhcpSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolDhcpSetTrace - Set the agent's DHCP traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolDhcpSetTrace(
    req: operations.ProtocolDhcpSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolDhcpSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolDhcpSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/dhcp/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolDhcpSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolDhcpSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolGetConfig - Returns the protocol's configuration.
  /** 
   * Returns the protocol's configuration.
  **/
  ProtocolGetConfig(
    req: operations.ProtocolGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/{prot}/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolGetConfig200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiGetArgs - Show the agent's IPMI argument structure
  /** 
   * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolIpmiGetArgs(
    req: operations.ProtocolIpmiGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiGetAttr - Show the outgoing message's attributes
  /** 
   * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
  **/
  ProtocolIpmiGetAttr(
    req: operations.ProtocolIpmiGetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetAttrRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiGetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiGetConfig - Show the agent's IPMI configuration
  /** 
   * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolIpmiGetConfig(
    req: operations.ProtocolIpmiGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configIpmi = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiGetStatistics - Show the agent's IPMI statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolIpmiGetStatistics(
    req: operations.ProtocolIpmiGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiGetStatsHdr - Show the IPMI statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolIpmiGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ipmi/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiGetTrace - Show the agent's IPMI traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolIpmiGetTrace(
    req: operations.ProtocolIpmiGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configIpmi = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiSetAttr - Set the outgoing message's attributes
  /** 
   * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
  **/
  ProtocolIpmiSetAttr(
    req: operations.ProtocolIpmiSetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiSetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiSetAttrRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiSetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiSetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiSetConfig - Set the agent's IPMI configuration
  /** 
   * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolIpmiSetConfig(
    req: operations.ProtocolIpmiSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolIpmiSetTrace - Set the agent's IPMI traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolIpmiSetTrace(
    req: operations.ProtocolIpmiSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolIpmiSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolIpmiSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolIpmiSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolIpmiSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
  /** 
   * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
  **/
  ProtocolMqttClientGetProtstate(
    req: operations.ProtocolMqttClientGetProtstateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientGetProtstateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientGetProtstateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientGetProtstateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientGetProtstate200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientGetState - Show the agent's MQTT state
  /** 
   * 0 means stopped, 1 means running
  **/
  ProtocolMqttClientGetState(
    req: operations.ProtocolMqttClientGetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientGetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientGetStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientGetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientGetState200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientMessageCard - Show the agent's current messages' cardinality
  /** 
   * 0 or more
  **/
  ProtocolMqttClientMessageCard(
    req: operations.ProtocolMqttClientMessageCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageCardRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientMessageCardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageCard200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientMessageGet - Show the agent's message attributes
  /** 
   * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
  **/
  ProtocolMqttClientMessageGet(
    req: operations.ProtocolMqttClientMessageGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientMessageGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageGet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientMessageSet - Set the agent's message attributes
  /** 
   * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
  **/
  ProtocolMqttClientMessageSet(
    req: operations.ProtocolMqttClientMessageSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientMessageSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientMessageSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientMessageSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientMessageSet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
  /** 
   * Restarts a subscription
  **/
  ProtocolMqttClientResubscribe(
    req: operations.ProtocolMqttClientResubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientResubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientResubscribeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientResubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientResubscribe200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
  /** 
   * Abort a connection
  **/
  ProtocolMqttClientRuntimeAbort(
    req: operations.ProtocolMqttClientRuntimeAbortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeAbortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeAbortRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientRuntimeAbortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeAbort200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
  /** 
   * Start a connection
  **/
  ProtocolMqttClientRuntimeConnect(
    req: operations.ProtocolMqttClientRuntimeConnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeConnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeConnectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientRuntimeConnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeConnect200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
  /** 
   * Graceful disconnect
  **/
  ProtocolMqttClientRuntimeDisconnect(
    req: operations.ProtocolMqttClientRuntimeDisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientRuntimeDisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientRuntimeDisconnectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientRuntimeDisconnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientRuntimeDisconnect200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
  /** 
   * Broker IP address
  **/
  ProtocolMqttClientSetBroker(
    req: operations.ProtocolMqttClientSetBrokerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetBrokerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetBrokerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetBrokerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetBroker200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetCleansession - Set the agent's MQTT session
  /** 
   * 1 for clean session , 0 not
  **/
  ProtocolMqttClientSetCleansession(
    req: operations.ProtocolMqttClientSetCleansessionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetCleansessionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetCleansessionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetCleansessionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetCleansession200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetClientid - Set the agent's MQTT client ID
  /** 
   * MQTT client ID
  **/
  ProtocolMqttClientSetClientid(
    req: operations.ProtocolMqttClientSetClientidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetClientidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetClientidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetClientidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetClientid200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
  /** 
   * Keep alive the TCP connection
  **/
  ProtocolMqttClientSetKeepalive(
    req: operations.ProtocolMqttClientSetKeepaliveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetKeepaliveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetKeepaliveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetKeepaliveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetKeepalive200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
  /** 
   * Action to take when MQTT session is disconnected
  **/
  ProtocolMqttClientSetOnDisconnect(
    req: operations.ProtocolMqttClientSetOnDisconnectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetOnDisconnectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetOnDisconnectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetOnDisconnectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetOnDisconnect200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetPassword - Set the agent's MQTT client password
  /** 
   * Client password
  **/
  ProtocolMqttClientSetPassword(
    req: operations.ProtocolMqttClientSetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetPassword200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
  /** 
   * target TCP port
  **/
  ProtocolMqttClientSetPort(
    req: operations.ProtocolMqttClientSetPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetPortRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetPort200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetUsername - Set the agent's MQTT client username
  /** 
   * Client username
  **/
  ProtocolMqttClientSetUsername(
    req: operations.ProtocolMqttClientSetUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetUsernameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetUsername200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetWillmsg - Set the agent's MQTT client's will
  /** 
   * Will message
  **/
  ProtocolMqttClientSetWillmsg(
    req: operations.ProtocolMqttClientSetWillmsgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillmsgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillmsgRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetWillmsgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillmsg200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
  /** 
   * QOS field
  **/
  ProtocolMqttClientSetWillqos(
    req: operations.ProtocolMqttClientSetWillqosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillqosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillqosRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetWillqosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillqos200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetWillretain - Set the agent's MQTT retained will
  /** 
   * Retaining will
  **/
  ProtocolMqttClientSetWillretain(
    req: operations.ProtocolMqttClientSetWillretainRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWillretainResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWillretainRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetWillretainResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWillretain200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
  /** 
   * Will topic for the will message
  **/
  ProtocolMqttClientSetWilltopic(
    req: operations.ProtocolMqttClientSetWilltopicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSetWilltopicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSetWilltopicRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSetWilltopicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSetWilltopic200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
  /** 
   * 0 or more
  **/
  ProtocolMqttClientSubscribeCard(
    req: operations.ProtocolMqttClientSubscribeCardRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeCardResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeCardRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSubscribeCardResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeCard200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSubscribeGet - Show the agent's subscription attributes
  /** 
   * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
  **/
  ProtocolMqttClientSubscribeGet(
    req: operations.ProtocolMqttClientSubscribeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSubscribeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeGet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientSubscribeSet - Set the agent's subscribe attributes
  /** 
   * Attribute can not be properties .
  **/
  ProtocolMqttClientSubscribeSet(
    req: operations.ProtocolMqttClientSubscribeSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientSubscribeSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientSubscribeSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientSubscribeSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientSubscribeSet200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
  /** 
   * Stops a subscription
  **/
  ProtocolMqttClientUnsubscribe(
    req: operations.ProtocolMqttClientUnsubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttClientUnsubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttClientUnsubscribeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttClientUnsubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttClientUnsubscribe200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttGetArgs - Show the agent's MQTT argument structure
  /** 
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolMqttGetArgs(
    req: operations.ProtocolMqttGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttGetConfig - Show the agent's MQTT configuration
  /** 
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolMqttGetConfig(
    req: operations.ProtocolMqttGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configMqtt = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttGetStatistics - Show the agent's MQTT statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolMqttGetStatistics(
    req: operations.ProtocolMqttGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttGetStatsHdr - Show the MQTT statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolMqttGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/mqtt/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttGetTrace - Show the agent's MQTT traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolMqttGetTrace(
    req: operations.ProtocolMqttGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configMqtt = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttSetConfig - Set the agent's MQTT configuration
  /** 
   * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolMqttSetConfig(
    req: operations.ProtocolMqttSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolMqttSetTrace - Set the agent's MQTT traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolMqttSetTrace(
    req: operations.ProtocolMqttSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolMqttSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolMqttSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolMqttSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolMqttSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowChangeAttr - Change NETFLOW export attributes
  /** 
   * Change attributes
  **/
  ProtocolNetflowChangeAttr(
    req: operations.ProtocolNetflowChangeAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeAttrRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/{flowset-uid}/{field-num}/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowChangeAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowChangeDfs - Change NETFLOW data export interval
  /** 
   * Interval in msec .
  **/
  ProtocolNetflowChangeDfs(
    req: operations.ProtocolNetflowChangeDfsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeDfsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeDfsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/dfs_interval/{interval}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowChangeDfsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeDfs200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowChangeTfs - Change NETFLOW template export interval
  /** 
   * Interval in msec .
  **/
  ProtocolNetflowChangeTfs(
    req: operations.ProtocolNetflowChangeTfsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowChangeTfsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowChangeTfsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/change/tfs_interval/{interval}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowChangeTfsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowChangeTfs200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowGetArgs - Show the agent's NETFLOW argument structure
  /** 
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolNetflowGetArgs(
    req: operations.ProtocolNetflowGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowGetConfig - Show the agent's NETFLOW configuration
  /** 
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolNetflowGetConfig(
    req: operations.ProtocolNetflowGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configNetflow = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowGetStatistics - Show the agent's NETFLOW statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolNetflowGetStatistics(
    req: operations.ProtocolNetflowGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowGetStatsHdr - Show the NETFLOW statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolNetflowGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/netflow/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowGetTrace - Show the agent's NETFLOW traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolNetflowGetTrace(
    req: operations.ProtocolNetflowGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configNetflow = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowHalt - Halt NETFLOW traffic
  /** 
   * Halt NETFLOW traffic
  **/
  ProtocolNetflowHalt(
    req: operations.ProtocolNetflowHaltRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowHaltResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowHaltRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/halt", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowHaltResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowHalt200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowList - Show list of NETFLOW exports
  /** 
   * Show list of NETFLOW exports
  **/
  ProtocolNetflowList(
    req: operations.ProtocolNetflowListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/flow/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowList200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowReload - Reload NETFLOW configuration before resuming traffic
  /** 
   * Reload NETFLOW configuration before resuming traffic
  **/
  ProtocolNetflowReload(
    req: operations.ProtocolNetflowReloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowReloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowReloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/reload", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowReloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowReload200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowResume - Resuming traffic
  /** 
   * Resuming traffic
  **/
  ProtocolNetflowResume(
    req: operations.ProtocolNetflowResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowResumeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/resume", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowResume200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowSetCollector - Swap NETFLOW collector
  /** 
   * Allow changing collector without stopping agent
  **/
  ProtocolNetflowSetCollector(
    req: operations.ProtocolNetflowSetCollectorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetCollectorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetCollectorRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/collector/{collectorIP}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowSetCollectorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetCollector200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowSetConfig - Set the agent's NETFLOW configuration
  /** 
   * Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolNetflowSetConfig(
    req: operations.ProtocolNetflowSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowSetFileName - Swap NETFLOW configuration file
  /** 
   * Allow reloading the configuration file for an agent without stopping agent
  **/
  ProtocolNetflowSetFileName(
    req: operations.ProtocolNetflowSetFileNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetFileNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetFileNameRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/filename/{fileName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowSetFileNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetFileName200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolNetflowSetTrace - Set the agent's NETFLOW traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolNetflowSetTrace(
    req: operations.ProtocolNetflowSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolNetflowSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolNetflowSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/netflow/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolNetflowSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolNetflowSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyGetArgs - Show the agent's PROXY argument structure
  /** 
   * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolProxyGetArgs(
    req: operations.ProtocolProxyGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyGetConfig - Show the agent's PROXY configuration
  /** 
   * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolProxyGetConfig(
    req: operations.ProtocolProxyGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configProxy = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyGetStatistics - Show the agent's PROXY statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolProxyGetStatistics(
    req: operations.ProtocolProxyGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyGetStatsHdr - Show the PROXY statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolProxyGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/proxy/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyGetTrace - Show the agent's PROXY traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolProxyGetTrace(
    req: operations.ProtocolProxyGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configProxy = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyPortAdd - Add individual proxy target on the agent and the simulator host
  /** 
   * Additional proxy target
  **/
  ProtocolProxyPortAdd(
    req: operations.ProtocolProxyPortAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/add/{port}/{target}/{targetPort}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyPortAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyPortIsstarted - Check individual target
  /** 
   * Check individual target
  **/
  ProtocolProxyPortIsstarted(
    req: operations.ProtocolProxyPortIsstartedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortIsstartedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortIsstartedRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/isStarted/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyPortIsstartedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortIsstarted200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyPortList - List all proxy targets
  ProtocolProxyPortList(
    req: operations.ProtocolProxyPortListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyPortListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortList200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyPortRemove - Remove individual proxy target on the agent and the simulator host
  /** 
   * Remove proxy target
  **/
  ProtocolProxyPortRemove(
    req: operations.ProtocolProxyPortRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortRemoveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/remove/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyPortRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortRemove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyPortStart - Start additional target
  /** 
   * Start additional target
  **/
  ProtocolProxyPortStart(
    req: operations.ProtocolProxyPortStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortStartRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/start/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyPortStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortStart200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxyPortStop - Stop additional target
  /** 
   * Stop additional target
  **/
  ProtocolProxyPortStop(
    req: operations.ProtocolProxyPortStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxyPortStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxyPortStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/port/stop/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxyPortStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxyPortStop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxySetConfig - Set the agent's PROXY configuration
  /** 
   * Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolProxySetConfig(
    req: operations.ProtocolProxySetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxySetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxySetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxySetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxySetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolProxySetTrace - Set the agent's PROXY traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolProxySetTrace(
    req: operations.ProtocolProxySetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolProxySetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolProxySetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/proxy/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolProxySetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolProxySetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowGetArgs - Show the agent's SFLOW argument structure
  /** 
   * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSflowGetArgs(
    req: operations.ProtocolSflowGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowGetConfig - Show the agent's SFLOW configuration
  /** 
   * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSflowGetConfig(
    req: operations.ProtocolSflowGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSflow = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowGetStatistics - Show the agent's SFLOW statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolSflowGetStatistics(
    req: operations.ProtocolSflowGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowGetStatsHdr - Show the SFLOW statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolSflowGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/sflow/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowGetTrace - Show the agent's SFLOW traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolSflowGetTrace(
    req: operations.ProtocolSflowGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSflow = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowHalt - Halt SFLOW traffic
  /** 
   * Halt SFLOW traffic
  **/
  ProtocolSflowHalt(
    req: operations.ProtocolSflowHaltRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowHaltResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowHaltRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/halt", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowHaltResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowHalt200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowReload - Reload SFLOW configuration before resuming traffic
  /** 
   * Reload SFLOW configuration before resuming traffic
  **/
  ProtocolSflowReload(
    req: operations.ProtocolSflowReloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowReloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowReloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/reload", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowReloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowReload200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowResume - Resuming traffic
  /** 
   * Resuming traffic
  **/
  ProtocolSflowResume(
    req: operations.ProtocolSflowResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowResumeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/resume", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowResume200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowSetConfig - Set the agent's SFLOW configuration
  /** 
   * Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSflowSetConfig(
    req: operations.ProtocolSflowSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSflowSetTrace - Set the agent's SFLOW traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolSflowSetTrace(
    req: operations.ProtocolSflowSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSflowSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSflowSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/sflow/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSflowSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSflowSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpGetArgs - Show the agent's SNMPTCP argument structure
  /** 
   * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSnmptcpGetArgs(
    req: operations.ProtocolSnmptcpGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpGetConfig - Show the agent's SNMPTCP configuration
  /** 
   * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSnmptcpGetConfig(
    req: operations.ProtocolSnmptcpGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSnmptcp = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpGetStatistics - Show the agent's SNMPTCP statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolSnmptcpGetStatistics(
    req: operations.ProtocolSnmptcpGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpGetStatsHdr - Show the SNMPTCP statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolSnmptcpGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/snmptcp/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpGetTrace - Show the agent's SNMPTCP traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolSnmptcpGetTrace(
    req: operations.ProtocolSnmptcpGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSnmptcp = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSnmptcpIpaliasDisable(
    req: operations.ProtocolSnmptcpIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasDisableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSnmptcpIpaliasEnable(
    req: operations.ProtocolSnmptcpIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasEnableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSnmptcpIpaliasIsenabled(
    req: operations.ProtocolSnmptcpIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasIsenabledRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpIpaliasList - List all IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSnmptcpIpaliasList(
    req: operations.ProtocolSnmptcpIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpIpaliasListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpSetConfig - Set the agent's SNMPTCP configuration
  /** 
   * Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSnmptcpSetConfig(
    req: operations.ProtocolSnmptcpSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmptcpSetTrace - Set the agent's SNMPTCP traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolSnmptcpSetTrace(
    req: operations.ProtocolSnmptcpSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmptcpSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmptcpSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmptcp/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmptcpSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmptcpSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3AccessAdd - Adds a new access entry with the specified parameters.
  /** 
   * Adds a new access entry with the specified parameters.
  **/
  ProtocolSnmpv3AccessAdd(
    req: operations.ProtocolSnmpv3AccessAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/add/{groupName}/{prefix}/{securityModel}/{securityLevel}/{contextMatch}/{readView}/{writeView}/{notifyView}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3AccessAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3AccessClear - Clears all access entries.
  /** 
   * Clears all access entries.
  **/
  ProtocolSnmpv3AccessClear(
    req: operations.ProtocolSnmpv3AccessClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessClearRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/clear", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3AccessClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3AccessDel - Deletes the specified access entry.
  /** 
   * Deletes the specified access entry.
  **/
  ProtocolSnmpv3AccessDel(
    req: operations.ProtocolSnmpv3AccessDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessDelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/del/{accessName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3AccessDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3AccessList - Returns the current acccess entries as an array of strings.
  /** 
   * Returns the current acccess entries as an array of strings.
  **/
  ProtocolSnmpv3AccessList(
    req: operations.ProtocolSnmpv3AccessListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3AccessListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3AccessListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/access/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3AccessListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3AccessList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GetConfig - Returns the SNMPv3 configuration.
  /** 
   * Returns the SNMPv3 configuration.
  **/
  ProtocolSnmpv3GetConfig(
    req: operations.ProtocolSnmpv3GetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSnmPv3 = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GetContextEngineid - Retrieves the contextEngineID for the agent instance.
  /** 
   * Retrieves the contextEngineID for the agent instance.
  **/
  ProtocolSnmpv3GetContextEngineid(
    req: operations.ProtocolSnmpv3GetContextEngineidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetContextEngineidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetContextEngineidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/context_engineid", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GetContextEngineidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetContextEngineid200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GetEngineboots - Retrieves the number of times the agent has been restarted.
  /** 
   * Retrieves the number of times the agent has been restarted.
  **/
  ProtocolSnmpv3GetEngineboots(
    req: operations.ProtocolSnmpv3GetEnginebootsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEnginebootsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEnginebootsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineboots", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GetEnginebootsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEngineboots200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GetEngineid - For started agents, retrieves the current engineID in use by the snmpv3 module.
  /** 
   * For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...
  **/
  ProtocolSnmpv3GetEngineid(
    req: operations.ProtocolSnmpv3GetEngineidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEngineidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEngineidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/engineid", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GetEngineidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEngineid200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GetEnginetime - Retrieves the time in seconds for which the agent has been running.
  /** 
   * Retrieves the time in seconds for which the agent has been running.
  **/
  ProtocolSnmpv3GetEnginetime(
    req: operations.ProtocolSnmpv3GetEnginetimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GetEnginetimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GetEnginetimeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/get/enginetime", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GetEnginetimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GetEnginetime200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GroupAdd - Adds a new group entry with the specified parameters.
  /** 
   * Adds a new group entry with the specified parameters.
  **/
  ProtocolSnmpv3GroupAdd(
    req: operations.ProtocolSnmpv3GroupAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/add/{groupName}/{securityModel}/{securityName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GroupAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GroupClear - Clears all group entries.
  /** 
   * Clears all group entries.
  **/
  ProtocolSnmpv3GroupClear(
    req: operations.ProtocolSnmpv3GroupClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupClearRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/clear", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GroupClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GroupDel - Deletes the specified group entry.
  /** 
   * Deletes the specified group entry.
  **/
  ProtocolSnmpv3GroupDel(
    req: operations.ProtocolSnmpv3GroupDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupDelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/del/{groupName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GroupDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3GroupList - Returns the current group entries as an array of strings.
  /** 
   * Returns the current group entries as an array of strings.
  **/
  ProtocolSnmpv3GroupList(
    req: operations.ProtocolSnmpv3GroupListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3GroupListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3GroupListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/group/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3GroupListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3GroupList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3SetConfig - Changes the SNMPv3 configuration.
  /** 
   * Changes the SNMPv3 configuration.
  **/
  ProtocolSnmpv3SetConfig(
    req: operations.ProtocolSnmpv3SetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3SetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3SetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/set/config/{parameter}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3SetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3SetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3UserAdd - Adds a new user entry with the specified parameters.
  /** 
   * Adds a new user entry with the specified parameters.
  **/
  ProtocolSnmpv3UserAdd(
    req: operations.ProtocolSnmpv3UserAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/add/{userName}/{securityName}/{authProtocol}/{authKey}/{privProtocol}/{privKey}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3UserAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3UserClear - Clears all user entries.
  /** 
   * Clears all user entries.
  **/
  ProtocolSnmpv3UserClear(
    req: operations.ProtocolSnmpv3UserClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserClearRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/clear", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3UserClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3UserDel - Deletes the specified user entry.
  /** 
   * Deletes the specified user entry.
  **/
  ProtocolSnmpv3UserDel(
    req: operations.ProtocolSnmpv3UserDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserDelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/del/{userName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3UserDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3UserList - Returns the current user entries as a Tcl list.
  /** 
   * Returns the current user entries as a Tcl list.
  **/
  ProtocolSnmpv3UserList(
    req: operations.ProtocolSnmpv3UserListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UserListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UserListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/user/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3UserListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UserList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3UsmSave - Saves current user settings in the currently loaded USM config file.
  /** 
   * Saves current user settings in the currently loaded USM config file.
  **/
  ProtocolSnmpv3UsmSave(
    req: operations.ProtocolSnmpv3UsmSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UsmSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UsmSaveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/save", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3UsmSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UsmSave200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3UsmSaveas - Saves current user settings in the specified USM config file.
  /** 
   * Saves current user settings in the specified USM config file.
  **/
  ProtocolSnmpv3UsmSaveas(
    req: operations.ProtocolSnmpv3UsmSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3UsmSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3UsmSaveasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/usm/saveas/{filename}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3UsmSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3UsmSaveas200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3VacmSave - Saves current group, access, view settings in the currently loaded VACM config file.
  /** 
   * Saves current group, access, view settings in the currently loaded VACM config file.
  **/
  ProtocolSnmpv3VacmSave(
    req: operations.ProtocolSnmpv3VacmSaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3VacmSaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3VacmSaveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/save", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3VacmSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3VacmSave200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3VacmSaveas - Saves current group, access, view settings in the specified VACM config file.
  /** 
   * Saves current group, access, view settings in the specified VACM config file.
  **/
  ProtocolSnmpv3VacmSaveas(
    req: operations.ProtocolSnmpv3VacmSaveasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3VacmSaveasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3VacmSaveasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/vacm/saveas/{filename}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3VacmSaveasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3VacmSaveas200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3ViewAdd - Adds a new view entry with the specified parameters.
  /** 
   * Adds a new view entry with the specified parameters.
  **/
  ProtocolSnmpv3ViewAdd(
    req: operations.ProtocolSnmpv3ViewAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/add/{viewName}/{viewType}/{subtree}/{mask}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3ViewAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3ViewClear - Clears all view entries.
  /** 
   * Clears all view entries.
  **/
  ProtocolSnmpv3ViewClear(
    req: operations.ProtocolSnmpv3ViewClearRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewClearResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewClearRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/clear", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3ViewClearResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewClear200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3ViewDel - Deletes the specified view entry.
  /** 
   * Deletes the specified view entry.
  **/
  ProtocolSnmpv3ViewDel(
    req: operations.ProtocolSnmpv3ViewDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewDelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/del/{viewName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3ViewDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSnmpv3ViewList - Returns the current view entries as an array of strings.
  /** 
   * Returns the current view entries as an array of strings.
  **/
  ProtocolSnmpv3ViewList(
    req: operations.ProtocolSnmpv3ViewListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSnmpv3ViewListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSnmpv3ViewListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/snmpv3/view/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSnmpv3ViewListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSnmpv3ViewList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshGetArgs - Show the agent's SSH argument structure
  /** 
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSshGetArgs(
    req: operations.ProtocolSshGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshGetConfig - Show the agent's SSH configuration
  /** 
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSshGetConfig(
    req: operations.ProtocolSshGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSsh = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshGetStatistics - Show the agent's SSH statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolSshGetStatistics(
    req: operations.ProtocolSshGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshGetStatsHdr - Show the SSH statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolSshGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ssh/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshGetTrace - Show the agent's SSH traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolSshGetTrace(
    req: operations.ProtocolSshGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSsh = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSshIpaliasDisable(
    req: operations.ProtocolSshIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasDisableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSshIpaliasEnable(
    req: operations.ProtocolSshIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasEnableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSshIpaliasIsenabled(
    req: operations.ProtocolSshIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasIsenabledRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshIpaliasList - List all IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolSshIpaliasList(
    req: operations.ProtocolSshIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshIpaliasListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshSetConfig - Set the agent's SSH configuration
  /** 
   * Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSshSetConfig(
    req: operations.ProtocolSshSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSshSetTrace - Set the agent's SSH traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolSshSetTrace(
    req: operations.ProtocolSshSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSshSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSshSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ssh/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSshSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSshSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogGetArgs - Show the agent's SYSLOG argument structure
  /** 
   * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSyslogGetArgs(
    req: operations.ProtocolSyslogGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogGetAttr - Show the outgoing message's attributes
  /** 
   * Attribute can be server , sequence , separator , hostname , timestamp
  **/
  ProtocolSyslogGetAttr(
    req: operations.ProtocolSyslogGetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetAttrRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/{attr}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogGetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogGetConfig - Show the agent's SYSLOG configuration
  /** 
   * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSyslogGetConfig(
    req: operations.ProtocolSyslogGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSyslog = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogGetStatistics - Show the agent's SYSLOG statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolSyslogGetStatistics(
    req: operations.ProtocolSyslogGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogGetStatsHdr - Show the SYSLOG statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolSyslogGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/syslog/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogGetTrace - Show the agent's SYSLOG traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolSyslogGetTrace(
    req: operations.ProtocolSyslogGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configSyslog = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogSend - Set the agent's SYSLOG traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolSyslogSend(
    req: operations.ProtocolSyslogSendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSendRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/send/{pri}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogSendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSend200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogSetAttr - Set the outgoing message's attributes
  /** 
   * Attribute can be server , sequence , separator , hostname , timestamp
  **/
  ProtocolSyslogSetAttr(
    req: operations.ProtocolSyslogSetAttrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSetAttrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSetAttrRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/{attr}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogSetAttrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSetAttr200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogSetConfig - Set the agent's SYSLOG configuration
  /** 
   * Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolSyslogSetConfig(
    req: operations.ProtocolSyslogSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolSyslogSetTrace - Set the agent's SYSLOG traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolSyslogSetTrace(
    req: operations.ProtocolSyslogSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolSyslogSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolSyslogSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/syslog/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolSyslogSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolSyslogSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetConnectionLogon - Changes the connection's current logon.
  /** 
   * Logon change allows (hidden) commands for a different access mode to run.
  **/
  ProtocolTelnetConnectionLogon(
    req: operations.ProtocolTelnetConnectionLogonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionLogonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionLogonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/logon/{connectionID}/{user}/{password}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetConnectionLogonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionLogon200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetConnectionRequest - Executes the command asynchronously .
  /** 
   * Equivalent of the command typed in by the user.
  **/
  ProtocolTelnetConnectionRequest(
    req: operations.ProtocolTelnetConnectionRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/request/{connectionID}/{command}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetConnectionRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionRequest200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetConnectionSignal - Triggers the asynchronous signal event with the specified signal name
  /** 
   * Signal name is either connect or idle
  **/
  ProtocolTelnetConnectionSignal(
    req: operations.ProtocolTelnetConnectionSignalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetConnectionSignalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetConnectionSignalRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/connection/signal/{connectionID}/{signalName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetConnectionSignalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetConnectionSignal200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetGetArgs - Show the agent's TELNET argument structure
  /** 
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolTelnetGetArgs(
    req: operations.ProtocolTelnetGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetGetConfig - Show the agent's TELNET configuration
  /** 
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolTelnetGetConfig(
    req: operations.ProtocolTelnetGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configTelnet = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetGetStatistics - Show the agent's TELNET statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolTelnetGetStatistics(
    req: operations.ProtocolTelnetGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetGetStatsHdr - Show the TELNET statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolTelnetGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/telnet/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetGetTrace - Show the agent's TELNET traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolTelnetGetTrace(
    req: operations.ProtocolTelnetGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configTelnet = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetIpaliasDisable - Disable individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolTelnetIpaliasDisable(
    req: operations.ProtocolTelnetIpaliasDisableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasDisableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasDisableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/disable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetIpaliasDisableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasDisable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetIpaliasEnable - Enable individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolTelnetIpaliasEnable(
    req: operations.ProtocolTelnetIpaliasEnableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasEnableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasEnableRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/enable/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetIpaliasEnableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasEnable200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetIpaliasIsenabled - Check individual IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolTelnetIpaliasIsenabled(
    req: operations.ProtocolTelnetIpaliasIsenabledRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasIsenabledResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasIsenabledRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/isenabled/{ipaddress}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetIpaliasIsenabledResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetIpaliasIsenabled200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetIpaliasList - List all IP aliases on the agent and the simulator host
  /** 
   * By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent
  **/
  ProtocolTelnetIpaliasList(
    req: operations.ProtocolTelnetIpaliasListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetIpaliasListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetIpaliasListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/ipalias/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetIpaliasListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ipAliases = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetServerGetConnections - Show the agent's TELNET connections
  /** 
   * IDs of all connected connections
  **/
  ProtocolTelnetServerGetConnections(
    req: operations.ProtocolTelnetServerGetConnectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetConnectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetConnectionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/connections", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetServerGetConnectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetConnections200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetServerGetKeymap - Show the agent's TELNET keymap file name
  /** 
   * Keymap file name
  **/
  ProtocolTelnetServerGetKeymap(
    req: operations.ProtocolTelnetServerGetKeymapRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetKeymapResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetKeymapRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/keymap", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetServerGetKeymapResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetKeymap200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetServerGetRulesdb - Show the agent's TELNET rules db file name
  /** 
   * Rules db file name
  **/
  ProtocolTelnetServerGetRulesdb(
    req: operations.ProtocolTelnetServerGetRulesdbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetRulesdbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetRulesdbRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/rulesdb", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetServerGetRulesdbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetRulesdb200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetServerGetState - Show the agent's TELNET server state
  /** 
   * Return 1 means accepting connections, 0 not
  **/
  ProtocolTelnetServerGetState(
    req: operations.ProtocolTelnetServerGetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/state", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetServerGetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetState200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetServerGetUserdb - Show the agent's TELNET user db file name
  /** 
   * User db file name
  **/
  ProtocolTelnetServerGetUserdb(
    req: operations.ProtocolTelnetServerGetUserdbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetUserdbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetUserdbRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/userdb", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetServerGetUserdbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetServerGetUserdb200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetServerGetUsers - Show the agent's TELNET users
  /** 
   * List of users
  **/
  ProtocolTelnetServerGetUsers(
    req: operations.ProtocolTelnetServerGetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetServerGetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetServerGetUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/server/get/users", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetServerGetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.telnetUsers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetSetConfig - Set the agent's TELNET configuration
  /** 
   * Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolTelnetSetConfig(
    req: operations.ProtocolTelnetSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTelnetSetTrace - Set the agent's TELNET traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolTelnetSetTrace(
    req: operations.ProtocolTelnetSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTelnetSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTelnetSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/telnet/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTelnetSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTelnetSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpGetArgs - Show the agent's TFTP argument structure
  /** 
   * Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolTftpGetArgs(
    req: operations.ProtocolTftpGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpGetConfig - Show the agent's TFTP configuration
  /** 
   * Agent's TFTP configuration
  **/
  ProtocolTftpGetConfig(
    req: operations.ProtocolTftpGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configTftp = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpGetStatistics - Show the agent's TFTP statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolTftpGetStatistics(
    req: operations.ProtocolTftpGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpGetStatsHdr - Show the TFTP statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolTftpGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/tftp/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpGetTrace - Show the agent's TFTP traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolTftpGetTrace(
    req: operations.ProtocolTftpGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configTftp = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSessionGetParameter - Show a parameter of a TFTP sesssion
  /** 
   * Parameter is server , port , or dstfile
  **/
  ProtocolTftpSessionGetParameter(
    req: operations.ProtocolTftpSessionGetParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionGetParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionGetParameterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/get/{parameter}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSessionGetParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionGetParameter200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSessionRead - Create a read session to download srcfile from server
  /** 
   * Session ID is returned
  **/
  ProtocolTftpSessionRead(
    req: operations.ProtocolTftpSessionReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/read/server/{srcfile}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSessionReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionRead200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSessionSetParameter - Set a parameter of a TFTP sesssion
  /** 
   * Parameter is server , port , or dstfile
  **/
  ProtocolTftpSessionSetParameter(
    req: operations.ProtocolTftpSessionSetParameterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionSetParameterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionSetParameterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/set/{parameter}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSessionSetParameterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionSetParameter200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSessionStart - Start a TFTP sesssion
  /** 
   * Start uploading or downloading the file
  **/
  ProtocolTftpSessionStart(
    req: operations.ProtocolTftpSessionStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStartRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/start", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSessionStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStart200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSessionStatus - Check a TFTP sesssion's status
  /** 
   * Status includes running state, bytes transfered, and time elapsed
  **/
  ProtocolTftpSessionStatus(
    req: operations.ProtocolTftpSessionStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/status", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSessionStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStatus200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSessionStop - Stop a TFTP sesssion
  /** 
   * Stop uploading or downloading the file
  **/
  ProtocolTftpSessionStop(
    req: operations.ProtocolTftpSessionStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/{sessionID}/stop", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSessionStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionStop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSessionWrite - Create a read session to upload srcfile to server
  /** 
   * Session ID is returned
  **/
  ProtocolTftpSessionWrite(
    req: operations.ProtocolTftpSessionWriteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSessionWriteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSessionWriteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/session/write/server/{srcfile}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSessionWriteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSessionWrite200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSetConfig - Set the agent's TFTP configuration
  /** 
   * Agent's TFTP configuration
  **/
  ProtocolTftpSetConfig(
    req: operations.ProtocolTftpSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTftpSetTrace - Set the agent's TFTP traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolTftpSetTrace(
    req: operations.ProtocolTftpSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTftpSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTftpSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tftp/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTftpSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTftpSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodGetArgs - Show the agent's TOD argument structure
  /** 
   * Agent's TOD configuration
  **/
  ProtocolTodGetArgs(
    req: operations.ProtocolTodGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTodGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodGetConfig - Show the agent's TOD configuration
  /** 
   * Agent's TOD configuration
  **/
  ProtocolTodGetConfig(
    req: operations.ProtocolTodGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configTod = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodGetStatistics - Show the agent's TOD statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolTodGetStatistics(
    req: operations.ProtocolTodGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTodGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodGetStatsHdr - Show the TOD statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolTodGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/tod/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTodGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodGetTrace - Show the agent's TOD traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolTodGetTrace(
    req: operations.ProtocolTodGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configTod = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodGettime - Retrieve TOD time
  /** 
   * Retrive time from server
  **/
  ProtocolTodGettime(
    req: operations.ProtocolTodGettimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodGettimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodGettimeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/gettime/server/{serverAddr}/port/{portNum}/script/{scriptName}/timeout/{timeSec}/retries/{numRetries}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodGettimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTodGettime200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodSetConfig - Set the agent's TOD configuration
  /** 
   * Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolTodSetConfig(
    req: operations.ProtocolTodSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTodSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolTodSetTrace - Set the agent's TOD traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolTodSetTrace(
    req: operations.ProtocolTodSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolTodSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolTodSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/tod/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolTodSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolTodSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebGetArgs - Show the agent's WEB argument structure
  /** 
   * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolWebGetArgs(
    req: operations.ProtocolWebGetArgsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetArgsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetArgsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/args", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebGetArgsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebGetArgs200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebGetConfig - Show the agent's WEB configuration
  /** 
   * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolWebGetConfig(
    req: operations.ProtocolWebGetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/config", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebGetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configWeb = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebGetStatistics - Show the agent's WEB statistics
  /** 
   * Statistics of fields indicated in the headers
  **/
  ProtocolWebGetStatistics(
    req: operations.ProtocolWebGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/statistics", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebGetStatistics200ApplicationJsonInt32Integers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebGetStatsHdr - Show the WEB statistics headers
  /** 
   * The headers of statistics fields
  **/
  ProtocolWebGetStatsHdr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetStatsHdrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/web/get/stats_hdr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebGetStatsHdrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebGetStatsHdr200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebGetTrace - Show the agent's WEB traffic tracing
  /** 
   * Trace 1 means enabled, 0 means not
  **/
  ProtocolWebGetTrace(
    req: operations.ProtocolWebGetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebGetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebGetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/get/trace", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebGetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configWeb = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebPortAdd - Add the agent's WEB port
  /** 
   * Add port
  **/
  ProtocolWebPortAdd(
    req: operations.ProtocolWebPortAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/add/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebPortAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebPortExists - Show the agent's WEB port
  /** 
   * Check the port. 1 means existing, 0 means not
  **/
  ProtocolWebPortExists(
    req: operations.ProtocolWebPortExistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortExistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortExistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/exists/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebPortExistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortExists200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebPortRemove - Remove the agent's WEB port
  /** 
   * Remove port
  **/
  ProtocolWebPortRemove(
    req: operations.ProtocolWebPortRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortRemoveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/remove/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebPortRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortRemove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebPortSet - Set the agent's WEB port attribute
  /** 
   * Set port
  **/
  ProtocolWebPortSet(
    req: operations.ProtocolWebPortSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/set/{port}/{protocol}/{version}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebPortSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortSet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebPortStart - Start the agent's WEB port
  /** 
   * Start port
  **/
  ProtocolWebPortStart(
    req: operations.ProtocolWebPortStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortStartRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/start/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebPortStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortStart200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebPortStop - Stop the agent's WEB port
  /** 
   * Stop port
  **/
  ProtocolWebPortStop(
    req: operations.ProtocolWebPortStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebPortStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebPortStopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/port/stop/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebPortStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebPortStop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebSetConfig - Set the agent's WEB configuration
  /** 
   * Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap
  **/
  ProtocolWebSetConfig(
    req: operations.ProtocolWebSetConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebSetConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebSetConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/config/{argument}/{value}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebSetConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebSetConfig200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProtocolWebSetTrace - Set the agent's WEB traffic tracing
  /** 
   * 1 to enable, 0 to disable
  **/
  ProtocolWebSetTrace(
    req: operations.ProtocolWebSetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProtocolWebSetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProtocolWebSetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/web/set/trace/{enableOrNot}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProtocolWebSetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.protocolWebSetTrace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Reload - Reload the current agent.
  /** 
   * This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).
  **/
  Reload(
    req: operations.ReloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReloadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/reload", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.reload200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Remove - Remove an entry from a table.
  /** 
   * The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.
  **/
  Remove(
    req: operations.RemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/remove/{object}/{instance}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.remove200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Resume - Resume the current agent.
  /** 
   * Resume the current agent.
  **/
  Resume(
    req: operations.ResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResumeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/resume", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.resume200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Save - Save agent MIB values.
  /** 
   * Save agent MIB values.
  **/
  Save(
    req: operations.SaveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SaveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SaveRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/save", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.save200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetDelay - one-way transit delay in msec
  /** 
   * The minimum granularity is 10 msec.
  **/
  SetDelay(
    req: operations.SetDelayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetDelayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetDelayRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/delay/{delay}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetDelayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setDelay200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetDrops - drop rate (every N-th PDU)
  /** 
   * 0 means no drops
  **/
  SetDrops(
    req: operations.SetDropsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetDropsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetDropsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/drops/{drops}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetDropsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setDrops200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetHost - host address of the agent.
  /** 
   * Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.
  **/
  SetHost(
    req: operations.SetHostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetHostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetHostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/host/{host}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetHostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setHost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetInformTimeout - timeout in seconds for retransmitting INFORM PDUs
  /** 
   * The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.
  **/
  SetInformTimeout(
    req: operations.SetInformTimeoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetInformTimeoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetInformTimeoutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/inform_timeout/{inform_timeout}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetInformTimeoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setInformTimeout200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetInterface - network interface card for the agent
  /** 
   * network interface card for the agent
  **/
  SetInterface(
    req: operations.SetInterfaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetInterfaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetInterfaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/interface/{interface}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetInterfaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setInterface200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetLog - The current log file for the Simulator.
  /** 
   * The current log file for the Simulator.
  **/
  SetLog(
    req: operations.SetLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/set/log";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setLog200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetMask - subnet mask of the agent.
  /** 
   * subnet mask of the agent.
  **/
  SetMask(
    req: operations.SetMaskRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetMaskResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetMaskRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/mask/{mask}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetMaskResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setMask200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetMibs - set of MIBs, simulations and scenarios
  /** 
   * set of MIBs, simulations and scenarios
  **/
  SetMibs(
    req: operations.SetMibsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetMibsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetMibsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/mibs", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetMibsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setMibs200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetNetdev - The network address of the host where the MIMIC simulator is running.
  /** 
   * The network address of the host where the MIMIC simulator is running.
  **/
  SetNetdev(
    
    config?: AxiosRequestConfig
  ): Promise<operations.SetNetdevResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/set/netdev";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetNetdevResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setNetdev200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetOiddir - MIB directory of the agent.
  /** 
   * MIB directory of the agent.
  **/
  SetOiddir(
    req: operations.SetOiddirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetOiddirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetOiddirRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/oiddir/{oiddir}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetOiddirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setOiddir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetOwner - owner of the agent
  /** 
   * owner of the agent
  **/
  SetOwner(
    req: operations.SetOwnerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetOwnerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetOwnerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/owner/{owner}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetOwnerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setOwner200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetPdusize - maximum PDU size
  /** 
   * The limit for this configurable is 65536
  **/
  SetPdusize(
    req: operations.SetPdusizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetPdusizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetPdusizeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/pdusize/{pdusize}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetPdusizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setPdusize200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetPort - port number
  /** 
   * port number
  **/
  SetPort(
    req: operations.SetPortRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetPortResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetPortRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/port/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetPortResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setPort200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetPrivdir - private directory of the agent.
  /** 
   * private directory of the agent.
  **/
  SetPrivdir(
    req: operations.SetPrivdirRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetPrivdirResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetPrivdirRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/privdir/{privdir}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetPrivdirResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setPrivdir200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetProtocols - protocols supported by agent as a comma-separated list
  /** 
   * protocols supported by agent as a comma-separated list
  **/
  SetProtocols(
    req: operations.SetProtocolsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetProtocolsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetProtocolsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/protocol", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetProtocolsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setProtocols200ApplicationJsonStringIntegers = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetReadCommunity - read community string
  /** 
   * read community string
  **/
  SetReadCommunity(
    req: operations.SetReadCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetReadCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetReadCommunityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/read/{read}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetReadCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setReadCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetStarttime - relative start time
  /** 
   * relative start time
  **/
  SetStarttime(
    req: operations.SetStarttimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetStarttimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetStarttimeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/start/{start}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetStarttimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setStarttime200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetState - Set the state of a MIB object object
  /** 
   * To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.
  **/
  SetState(
    req: operations.SetStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/state/set/{object}/{state}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setState200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetTrace - SNMP PDU tracing
  /** 
   * SNMP PDU tracing
  **/
  SetTrace(
    req: operations.SetTraceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetTraceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetTraceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/trace/{trace}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetTraceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setTrace200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetValidate - SNMP SET validation policy
  /** 
   * Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.
  **/
  SetValidate(
    req: operations.SetValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetValidateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/validate/{validate}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setValidate200ApplicationJsonInt32Integer = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetValue - Set a variable in the Value Space.
  /** 
   * NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.
  **/
  SetValue(
    req: operations.SetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/set/{object}/{instance}/{variable}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.SetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SetWriteCommunity - write community string
  /** 
   * write community string
  **/
  SetWriteCommunity(
    req: operations.SetWriteCommunityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetWriteCommunityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetWriteCommunityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/set/write/{write}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SetWriteCommunityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.setWriteCommunity200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SplitOid - Split the numerical OID into the object OID and instance OID.
  /** 
   * This is useful if you have an OID which is a combination of object and instance.
  **/
  SplitOid(
    req: operations.SplitOidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SplitOidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SplitOidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/split/{OID}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SplitOidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.splitOid200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Start - Start the current agent.
  /** 
   * For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.
  **/
  Start(
    req: operations.StartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/start", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.start200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StartAllAgents - Start MIMIC.
  /** 
   * Start MIMIC.
  **/
  StartAllAgents(
    
    config?: AxiosRequestConfig
  ): Promise<operations.StartAllAgentsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/start";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartAllAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.startAllAgents200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StartIpalias - Starts an existing ipalias for the agent.
  /** 
   * port defaults to 161 if not specified.
  **/
  StartIpalias(
    req: operations.StartIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartIpaliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/start/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StartIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.startIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StatusIpalias - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
  /** 
   * port defaults to 161 if not specified.
  **/
  StatusIpalias(
    req: operations.StatusIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StatusIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StatusIpaliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/status/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StatusIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.statusIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Stop - Show the agent's primary IP address
  /** 
   * Agent primary IP address
  **/
  Stop(
    req: operations.StopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/stop", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stop200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopAllAgents - Stop MIMIC.
  /** 
   * Stop MIMIC.
  **/
  StopAllAgents(
    
    config?: AxiosRequestConfig
  ): Promise<operations.StopAllAgentsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/stop";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StopAllAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stopAllAgents200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StopIpalias - Stops an existing ipalias for the agent.
  /** 
   * port defaults to 161 if not specified.
  **/
  StopIpalias(
    req: operations.StopIpaliasRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StopIpaliasResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StopIpaliasRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/ipalias/stop/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StopIpaliasResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.stopIpalias200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StoreExists - This command can be used as a predicate to ascertain the existence of a given variable.
  /** 
   * It returns "1" if the variable exists, else "0".
  **/
  StoreExists(
    req: operations.StoreExistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreExistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreExistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/exists/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StoreExistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storeExists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StoreGet - Fetches the value associated with a variable.
  /** 
   * The value will be returned as a string (like all Tcl values).
  **/
  StoreGet(
    req: operations.StoreGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/get/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StoreGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storeGet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StoreList - This command will return the list of variables in the said scope.
  /** 
   * The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.
  **/
  StoreList(
    
    config?: AxiosRequestConfig
  ): Promise<operations.StoreListResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/store/list";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StoreListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storeList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StoreLreplace - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
  /** 
   * These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
  **/
  StoreLreplace(
    req: operations.StoreLreplaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreLreplaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreLreplaceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/lreplace/{var}/{index}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.StoreLreplaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storeLreplace200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StorePersists - This command can be used as a predicate to ascertain the persistence of a given variable.
  /** 
   * It returns "1" if the variable is persistent, else "0".
  **/
  StorePersists(
    req: operations.StorePersistsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StorePersistsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StorePersistsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/persists/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StorePersistsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storePersists200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StoreSave - This operation flushes all global objects which need to be made persistent to disk.
  /** 
   * The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.
  **/
  StoreSave(
    
    config?: AxiosRequestConfig
  ): Promise<operations.StoreSaveResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/set/persistent";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StoreSaveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storeSave200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StoreSet - Set the variable store for the global storage
  /** 
   * Persist 1 means persistent , 0 means non-persistent
  **/
  StoreSet(
    req: operations.StoreSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/set/{var}/{persist}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.StoreSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storeSet200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StoreUnset - Deletes a variable which is currently defined.
  /** 
   * This will cleanup persistent variables if needed
  **/
  StoreUnset(
    req: operations.StoreUnsetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoreUnsetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoreUnsetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/store/unset/{var}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StoreUnsetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.storeUnset200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Terminate - Terminate the MIMIC daemon.
  /** 
   * Terminate the MIMIC daemon.
  **/
  Terminate(
    
    config?: AxiosRequestConfig
  ): Promise<operations.TerminateResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mimic/terminate";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TerminateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.terminate200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TrapConfigAdd - Add a trap destination to the set of destinations.
  /** 
   * Add a trap destination to the set of destinations.
  **/
  TrapConfigAdd(
    req: operations.TrapConfigAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapConfigAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapConfigAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/add/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TrapConfigAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trapConfigAdd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TrapConfigDel - Remove a trap destination from the set of destinations.
  /** 
   * Remove a trap destination from the set of destinations.
  **/
  TrapConfigDel(
    req: operations.TrapConfigDelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapConfigDelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapConfigDelRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/delete/{IP}/{port}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TrapConfigDelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trapConfigDel200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TrapConfigList - List the set of trap destinations for this agent instance.
  /** 
   * Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.
  **/
  TrapConfigList(
    req: operations.TrapConfigListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapConfigListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapConfigListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/config/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TrapConfigListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trapDests = httpRes?.data;
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TrapList - List the outstanding asynchronous traps for this agent instance.
  /** 
   * List the outstanding asynchronous traps for this agent instance.
  **/
  TrapList(
    req: operations.TrapListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TrapListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TrapListRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/trap/list", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TrapListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.trapList200ApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UnsetValue - Unset a variable in the Value Space in order to free its memory.
  /** 
   * Only variables that have previously been set can be unset.
  **/
  UnsetValue(
    req: operations.UnsetValueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsetValueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsetValueRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mimic/agent/{agentNum}/value/unset/{object}/{instance}/{variable}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UnsetValueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.unsetValue200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case 400:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
