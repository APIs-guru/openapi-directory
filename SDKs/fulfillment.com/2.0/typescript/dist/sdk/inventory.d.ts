import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Inventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInventory - List of Item Inventories
     *
     * Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.
    **/
    getInventory(req: operations.GetInventoryRequest, config?: AxiosRequestConfig): Promise<operations.GetInventoryResponse>;
}
