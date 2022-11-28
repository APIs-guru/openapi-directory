import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PublicKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePublicKeysId - Delete Public Key
     *
     * Delete Public Key
    **/
    deletePublicKeysId(req: operations.DeletePublicKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePublicKeysIdResponse>;
    /**
     * getPublicKeys - List Public Keys
     *
     * List Public Keys
    **/
    getPublicKeys(req: operations.GetPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicKeysResponse>;
    /**
     * getPublicKeysId - Show Public Key
     *
     * Show Public Key
    **/
    getPublicKeysId(req: operations.GetPublicKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicKeysIdResponse>;
    /**
     * patchPublicKeysId - Update Public Key
     *
     * Update Public Key
    **/
    patchPublicKeysId(req: operations.PatchPublicKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchPublicKeysIdResponse>;
    /**
     * postPublicKeys - Create Public Key
     *
     * Create Public Key
    **/
    postPublicKeys(req: operations.PostPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostPublicKeysResponse>;
}
