import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Modifiers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * modifiersAdd - Create Modifier
     *
     * Create Modifier
    **/
    modifiersAdd(req: operations.ModifiersAddRequest, config?: AxiosRequestConfig): Promise<operations.ModifiersAddResponse>;
    /**
     * modifiersAll - List Modifiers
     *
     * List Modifiers
    **/
    modifiersAll(req: operations.ModifiersAllRequest, config?: AxiosRequestConfig): Promise<operations.ModifiersAllResponse>;
    /**
     * modifiersDelete - Delete Modifier
     *
     * Delete Modifier
    **/
    modifiersDelete(req: operations.ModifiersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ModifiersDeleteResponse>;
    /**
     * modifiersOne - Get Modifier
     *
     * Get Modifier
    **/
    modifiersOne(req: operations.ModifiersOneRequest, config?: AxiosRequestConfig): Promise<operations.ModifiersOneResponse>;
    /**
     * modifiersUpdate - Update Modifier
     *
     * Update Modifier
    **/
    modifiersUpdate(req: operations.ModifiersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ModifiersUpdateResponse>;
}
