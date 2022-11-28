import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class As2Keys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAs2KeysId - Delete As2 Key
     *
     * Delete As2 Key
    **/
    deleteAs2KeysId(req: operations.DeleteAs2KeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAs2KeysIdResponse>;
    /**
     * getAs2Keys - List As2 Keys
     *
     * List As2 Keys
    **/
    getAs2Keys(req: operations.GetAs2KeysRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2KeysResponse>;
    /**
     * getAs2KeysId - Show As2 Key
     *
     * Show As2 Key
    **/
    getAs2KeysId(req: operations.GetAs2KeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2KeysIdResponse>;
    /**
     * patchAs2KeysId - Update As2 Key
     *
     * Update As2 Key
    **/
    patchAs2KeysId(req: operations.PatchAs2KeysIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAs2KeysIdResponse>;
    /**
     * postAs2Keys - Create As2 Key
     *
     * Create As2 Key
    **/
    postAs2Keys(req: operations.PostAs2KeysRequest, config?: AxiosRequestConfig): Promise<operations.PostAs2KeysResponse>;
}
