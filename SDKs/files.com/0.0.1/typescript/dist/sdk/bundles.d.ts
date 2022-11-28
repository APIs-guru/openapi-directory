import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bundles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteBundlesId - Delete Bundle
     *
     * Delete Bundle
    **/
    deleteBundlesId(req: operations.DeleteBundlesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBundlesIdResponse>;
    /**
     * getBundles - List Bundles
     *
     * List Bundles
    **/
    getBundles(req: operations.GetBundlesRequest, config?: AxiosRequestConfig): Promise<operations.GetBundlesResponse>;
    /**
     * getBundlesId - Show Bundle
     *
     * Show Bundle
    **/
    getBundlesId(req: operations.GetBundlesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBundlesIdResponse>;
    /**
     * patchBundlesId - Update Bundle
     *
     * Update Bundle
    **/
    patchBundlesId(req: operations.PatchBundlesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBundlesIdResponse>;
    /**
     * postBundles - Create Bundle
     *
     * Create Bundle
    **/
    postBundles(req: operations.PostBundlesRequest, config?: AxiosRequestConfig): Promise<operations.PostBundlesResponse>;
    /**
     * postBundlesIdShare - Send email(s) with a link to bundle
     *
     * Send email(s) with a link to bundle
    **/
    postBundlesIdShare(req: operations.PostBundlesIdShareRequest, config?: AxiosRequestConfig): Promise<operations.PostBundlesIdShareResponse>;
}
