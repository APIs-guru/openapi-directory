import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RemoteServers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRemoteServersId - Delete Remote Server
     *
     * Delete Remote Server
    **/
    deleteRemoteServersId(req: operations.DeleteRemoteServersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRemoteServersIdResponse>;
    /**
     * getRemoteServers - List Remote Servers
     *
     * List Remote Servers
    **/
    getRemoteServers(req: operations.GetRemoteServersRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteServersResponse>;
    /**
     * getRemoteServersId - Show Remote Server
     *
     * Show Remote Server
    **/
    getRemoteServersId(req: operations.GetRemoteServersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteServersIdResponse>;
    /**
     * patchRemoteServersId - Update Remote Server
     *
     * Update Remote Server
    **/
    patchRemoteServersId(req: operations.PatchRemoteServersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchRemoteServersIdResponse>;
    /**
     * postRemoteServers - Create Remote Server
     *
     * Create Remote Server
    **/
    postRemoteServers(req: operations.PostRemoteServersRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoteServersResponse>;
}
