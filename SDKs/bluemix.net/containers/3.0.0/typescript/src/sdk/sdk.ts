import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://containers-api.ng.bluemix.net/v3",
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
   * deleteContainersGroupsNameOrId - Stop and delete all container instances in a container group.
   *
   * Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.
  **/
  deleteContainersGroupsNameOrId(
    req: operations.DeleteContainersGroupsNameOrIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteContainersGroupsNameOrIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteContainersGroupsNameOrIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/groups/{name_or_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        const res: operations.DeleteContainersGroupsNameOrIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteContainersNameOrId - Remove a single container
   *
   * Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.
  **/
  deleteContainersNameOrId(
    req: operations.DeleteContainersNameOrIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteContainersNameOrIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteContainersNameOrIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        const res: operations.DeleteContainersNameOrIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteImagesId - Remove a Docker image.
   *
   * Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).
  **/
  deleteImagesId(
    req: operations.DeleteImagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteImagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteImagesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/images/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteImagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteVolumesFsName - Delete a file share
   *
   * This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).
   * 
   *  Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint. 
   * 
   *  **Note:** To delete a file share you must have been granted organization developer rights.
  **/
  deleteVolumesFsName(
    req: operations.DeleteVolumesFsNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVolumesFsNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVolumesFsNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/volumes/fs/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVolumesFsNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteVolumesName - Delete a volume
   *
   * Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost. 
  **/
  deleteVolumesName(
    req: operations.DeleteVolumesNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVolumesNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVolumesNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/volumes/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVolumesNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersFloatingIps - List available public IP addresses in a space
   *
   * This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).
  **/
  getContainersFloatingIps(
    req: operations.GetContainersFloatingIpsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersFloatingIpsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersFloatingIpsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/floating-ips";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        const res: operations.GetContainersFloatingIpsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.floatingIps = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersGroups - List all container groups in a space
   *
   * This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).
  **/
  getContainersGroups(
    req: operations.GetContainersGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/groups";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersGroupsGetListItems = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersGroupsNameOrId - Inspect a container group.
   *
   * This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).
  **/
  getContainersGroupsNameOrId(
    req: operations.GetContainersGroupsNameOrIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersGroupsNameOrIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersGroupsNameOrIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/groups/{name_or_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersGroupsNameOrIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersGroupsNameOrIdGetDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersIdStatus - List the current state of a container.
   *
   * This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
  **/
  getContainersIdStatus(
    req: operations.GetContainersIdStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersIdStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersIdStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{id}/status", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersIdStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getContainerStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersJson - List single containers in a space.
   *
   * This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.
  **/
  getContainersJson(
    req: operations.GetContainersJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/json";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        const res: operations.GetContainersJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containers = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersMessages - List messages for the user
   *
   * This endpoint retrieves all IBM Containers system messages for the user.
  **/
  getContainersMessages(
    req: operations.GetContainersMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersMessagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/messages";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersMessagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getContainersMessages200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersNameOrIdJson - Inspect a single container
   *
   * This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).
  **/
  getContainersNameOrIdJson(
    req: operations.GetContainersNameOrIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersNameOrIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersNameOrIdJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/json", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersNameOrIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersQuota - Retrieve organization and space specific quota
   *
   * Retrieve the quota that is assigned to the organization and space.
  **/
  getContainersQuota(
    req: operations.GetContainersQuotaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersQuotaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersQuotaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/quota";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersQuotaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersQuotaInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersUsage - List container sizes and quota limits
   *
   * This endpoint returns a list of available container sizes and the quota limit and usage for the space. 
   * 
   * - Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
   * - Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space. 
   * - Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit. 
  **/
  getContainersUsage(
    req: operations.GetContainersUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetContainersUsageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/usage";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersUsageInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getContainersVersion - List latest API version
   *
   * This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.
  **/
  getContainersVersion(
    config?: AxiosRequestConfig
  ): Promise<operations.GetContainersVersionResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/version";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetContainersVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersVersionGetInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getImagesJson - List all Docker images that are available in your private Bluemix registry.
   *
   * This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.
  **/
  getImagesJson(
    req: operations.GetImagesJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetImagesJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetImagesJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/images/json";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetImagesJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getImagesNameOrIdJson - Inspect a Docker image in private Bluemix registry
   *
   * This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).
  **/
  getImagesNameOrIdJson(
    req: operations.GetImagesNameOrIdJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetImagesNameOrIdJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetImagesNameOrIdJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/images/{name_or_id}/json", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetImagesNameOrIdJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRegistryNamespaces - Retrieve the namespace of an organization.
   *
   * This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
  **/
  getRegistryNamespaces(
    req: operations.GetRegistryNamespacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistryNamespacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegistryNamespacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/registry/namespaces";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegistryNamespacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.namespace = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRegistryNamespacesNamespace - Check the availability of a namespace
   *
   * This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization. 
   * 
   *  Consider the following rules when choosing a namespace for your organization: 
   * 
   * - Every organization can have one namespace at a time only 
   * - The namespace must be unique in Bluemix. 
   * - The namespace can be 4-30 characters long. 
   * - The namespace must start with at least one letter or number. 
   * - The namespace can only contain lowercase letters, numbers or underscores (_). 
  **/
  getRegistryNamespacesNamespace(
    req: operations.GetRegistryNamespacesNamespaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegistryNamespacesNamespaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegistryNamespacesNamespaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registry/namespaces/{namespace}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegistryNamespacesNamespaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.namespace = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTlskey - Retrieve the TLS Certificate
   *
   * This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.
  **/
  getTlskey(
    req: operations.GetTlskeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTlskeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTlskeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tlskey";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTlskeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.certificate = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVolumesFsFlavorsJson - List available file share sizes
   *
   * This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).
  **/
  getVolumesFsFlavorsJson(
    req: operations.GetVolumesFsFlavorsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumesFsFlavorsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumesFsFlavorsJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/volumes/fs/flavors/json";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVolumesFsFlavorsJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getVolumesFsFlavorsJson200ApplicationJsonIntegers = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVolumesFsJson - List available file shares in a space
   *
   * This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).
  **/
  getVolumesFsJson(
    req: operations.GetVolumesFsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumesFsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumesFsJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/volumes/fs/json";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVolumesFsJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileshares = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVolumesFsNameJson - Inspect a file share
   *
   * This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).
  **/
  getVolumesFsNameJson(
    req: operations.GetVolumesFsNameJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumesFsNameJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumesFsNameJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/volumes/fs/{name}/json", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVolumesFsNameJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFileshareDetails = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVolumesJson - List all volumes for a space
   *
   * This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).
  **/
  getVolumesJson(
    req: operations.GetVolumesJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumesJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumesJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/volumes/json";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVolumesJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.volumes = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVolumesNameJson - Retrieve detailed information about a volume. 
   *
   * Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).
  **/
  getVolumesNameJson(
    req: operations.GetVolumesNameJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVolumesNameJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVolumesNameJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/volumes/{name}/json", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVolumesNameJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.volume = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchContainersGroupsNameOrId - Update a container group.
   *
   * Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`). 
   * 
   * Note: You can run only one update at a time.  
   * 
   *  The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances. 
  **/
  patchContainersGroupsNameOrId(
    req: operations.PatchContainersGroupsNameOrIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchContainersGroupsNameOrIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchContainersGroupsNameOrIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/groups/{name_or_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchContainersGroupsNameOrIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postBuild - Build a Docker image from a Dockerfile
   *
   * This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).
   * 
   *  To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.
  **/
  postBuild(
    req: operations.PostBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBuildRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/build";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersCreate - Create and start a single container
   *
   * This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app. 
   * 
   *  In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container. 
   * 
   *  To create a container with IBM Containers, you must at least define the image that the container is based on.
   * 
   * - Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.
  **/
  postContainersCreate(
    req: operations.PostContainersCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/create";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
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
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containerId = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersFloatingIpsIpRelease - Release public IP address
   *
   * This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.
  **/
  postContainersFloatingIpsIpRelease(
    req: operations.PostContainersFloatingIpsIpReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersFloatingIpsIpReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersFloatingIpsIpReleaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/floating-ips/{ip}/release", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersFloatingIpsIpReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersFloatingIpsRequest - Request a public IP address for a space
   *
   * This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.
  **/
  postContainersFloatingIpsRequest(
    req: operations.PostContainersFloatingIpsRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersFloatingIpsRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersFloatingIpsRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/floating-ips/request";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersFloatingIpsRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postContainersFloatingIpsRequest200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 402:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersGroups - Create and start a container group.
   *
   * This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.
   * 
   * To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * - Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-). 
   * - Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.
  **/
  postContainersGroups(
    req: operations.PostContainersGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/groups";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostContainersGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersGroupsPostCreatedInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersGroupsNameOrIdMaproute - Map a public route to a container group.
   *
   * If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.
  **/
  postContainersGroupsNameOrIdMaproute(
    req: operations.PostContainersGroupsNameOrIdMaprouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersGroupsNameOrIdMaprouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersGroupsNameOrIdMaprouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/groups/{name_or_id}/maproute", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostContainersGroupsNameOrIdMaprouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersGroupsNameOrIdMaproutePostInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersGroupsNameOrIdUnmaproute - Unmap a public route from a container group
   *
   * This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet. 
   * 
   *  When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups. 
  **/
  postContainersGroupsNameOrIdUnmaproute(
    req: operations.PostContainersGroupsNameOrIdUnmaprouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersGroupsNameOrIdUnmaprouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersGroupsNameOrIdUnmaprouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/groups/{name_or_id}/unmaproute", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostContainersGroupsNameOrIdUnmaprouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.containersGroupsNameOrIdMaproutePostInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdFloatingIpsIpBind - Bind a public IP address to a single container
   *
   * This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.
  **/
  postContainersNameOrIdFloatingIpsIpBind(
    req: operations.PostContainersNameOrIdFloatingIpsIpBindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdFloatingIpsIpBindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdFloatingIpsIpBindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/floating-ips/{ip}/bind", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdFloatingIpsIpBindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdFloatingIpsIpUnbind - Unbind a public IP address from a container
   *
   * This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers. 
  **/
  postContainersNameOrIdFloatingIpsIpUnbind(
    req: operations.PostContainersNameOrIdFloatingIpsIpUnbindRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdFloatingIpsIpUnbindResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdFloatingIpsIpUnbindRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/floating-ips/{ip}/unbind", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdFloatingIpsIpUnbindResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdPause - Pause a single container
   *
   * Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).
  **/
  postContainersNameOrIdPause(
    req: operations.PostContainersNameOrIdPauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdPauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdPauseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/pause", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdPauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdRename - Rename a single container
   *
   * Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`). 
  **/
  postContainersNameOrIdRename(
    req: operations.PostContainersNameOrIdRenameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdRenameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdRenameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/rename", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdRenameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdRestart - Restart a single container
   *
   * Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).
  **/
  postContainersNameOrIdRestart(
    req: operations.PostContainersNameOrIdRestartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdRestartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdRestartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/restart", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdRestartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdStart - Start a single container
   *
   * Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).
  **/
  postContainersNameOrIdStart(
    req: operations.PostContainersNameOrIdStartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdStartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdStartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/start", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdStartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdStop - Stop a single container
   *
   * Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).
  **/
  postContainersNameOrIdStop(
    req: operations.PostContainersNameOrIdStopRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdStopResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdStopRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/stop", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdStopResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postContainersNameOrIdUnpause - Unpause a single container
   *
   * Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).
  **/
  postContainersNameOrIdUnpause(
    req: operations.PostContainersNameOrIdUnpauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostContainersNameOrIdUnpauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostContainersNameOrIdUnpauseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/containers/{name_or_id}/unpause", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostContainersNameOrIdUnpauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVolumesCreate - Create a volume in a space
   *
   * This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS). 
   * 
   *  After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints. 
   * 
   *  Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.
  **/
  postVolumesCreate(
    req: operations.PostVolumesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVolumesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVolumesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/volumes/create";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostVolumesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.volume = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVolumesFsCreate - Create a file share in a space
   *
   * This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`). 
   * 
   *  A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.
   * 
   *  As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost. 
   * 
   * The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.
  **/
  postVolumesFsCreate(
    req: operations.PostVolumesFsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVolumesFsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVolumesFsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/volumes/fs/create";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostVolumesFsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVolumesName - Share a volume with another space
   *
   * This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.
  **/
  postVolumesName(
    req: operations.PostVolumesNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVolumesNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVolumesNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/volumes/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostVolumesNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.volume = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putContainersQuota - Update space quota
   *
   * This endpoint updates the quota that is allocated to a Bluemix space. 
   * 
   *  **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.
  **/
  putContainersQuota(
    req: operations.PutContainersQuotaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutContainersQuotaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutContainersQuotaRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/containers/quota";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PutContainersQuotaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putRegistryNamespacesNamespace - Set a namespace for your private Bluemix registry.
   *
   * Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry. 
   * 
   *  The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization: 
   * 
   * - Every organization can have one namespace at a time only 
   * - The namespace must be unique in Bluemix. 
   * - The namespace can be 4-30 characters long. 
   * - The namespace must start with at least one letter or number. 
   * - The namespace can only contain lowercase letters, numbers or underscores (_).
  **/
  putRegistryNamespacesNamespace(
    req: operations.PutRegistryNamespacesNamespaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRegistryNamespacesNamespaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRegistryNamespacesNamespaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/registry/namespaces/{namespace}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRegistryNamespacesNamespaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.namespace = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putTlskeyRefresh - Refresh the TLS Certificate
   *
   * This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).
  **/
  putTlskeyRefresh(
    req: operations.PutTlskeyRefreshRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTlskeyRefreshResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTlskeyRefreshRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/tlskey/refresh";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutTlskeyRefreshResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.certificateRefresh = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
