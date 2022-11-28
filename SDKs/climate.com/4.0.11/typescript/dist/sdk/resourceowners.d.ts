import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResourceOwners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getResourceOwner - Retrieve a resource owner by ID
     *
     * Retrieve a resource owner for the given `resourceOwnerId`.
    **/
    getResourceOwner(req: operations.GetResourceOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceOwnerResponse>;
}
