import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Items {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * itemsAdd - Create Item
     *
     * Create Item
    **/
    itemsAdd(req: operations.ItemsAddRequest, config?: AxiosRequestConfig): Promise<operations.ItemsAddResponse>;
    /**
     * itemsAll - List Items
     *
     * List Items
    **/
    itemsAll(req: operations.ItemsAllRequest, config?: AxiosRequestConfig): Promise<operations.ItemsAllResponse>;
    /**
     * itemsDelete - Delete Item
     *
     * Delete Item
    **/
    itemsDelete(req: operations.ItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ItemsDeleteResponse>;
    /**
     * itemsOne - Get Item
     *
     * Get Item
    **/
    itemsOne(req: operations.ItemsOneRequest, config?: AxiosRequestConfig): Promise<operations.ItemsOneResponse>;
    /**
     * itemsUpdate - Update Item
     *
     * Update Item
    **/
    itemsUpdate(req: operations.ItemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ItemsUpdateResponse>;
}
