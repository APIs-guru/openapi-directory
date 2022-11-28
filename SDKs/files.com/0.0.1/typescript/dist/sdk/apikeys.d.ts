import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteApiKeysId - Delete Api Key
     *
     * Delete Api Key
    **/
    deleteApiKeysId(req: operations.DeleteApiKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeysIdResponse>;
    /**
     * getApiKeys - List Api Keys
     *
     * List Api Keys
    **/
    getApiKeys(req: operations.GetApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetApiKeysResponse>;
    /**
     * getApiKeysId - Show Api Key
     *
     * Show Api Key
    **/
    getApiKeysId(req: operations.GetApiKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiKeysIdResponse>;
    /**
     * patchApiKeysId - Update Api Key
     *
     * Update Api Key
    **/
    patchApiKeysId(req: operations.PatchApiKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchApiKeysIdResponse>;
    /**
     * postApiKeys - Create Api Key
     *
     * Create Api Key
    **/
    postApiKeys(req: operations.PostApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostApiKeysResponse>;
}
