import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OrderTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * orderTypesAdd - Create Order Type
     *
     * Create Order Type
    **/
    orderTypesAdd(req: operations.OrderTypesAddRequest, config?: AxiosRequestConfig): Promise<operations.OrderTypesAddResponse>;
    /**
     * orderTypesAll - List Order Types
     *
     * List Order Types
    **/
    orderTypesAll(req: operations.OrderTypesAllRequest, config?: AxiosRequestConfig): Promise<operations.OrderTypesAllResponse>;
    /**
     * orderTypesDelete - Delete Order Type
     *
     * Delete Order Type
    **/
    orderTypesDelete(req: operations.OrderTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OrderTypesDeleteResponse>;
    /**
     * orderTypesOne - Get Order Type
     *
     * Get Order Type
    **/
    orderTypesOne(req: operations.OrderTypesOneRequest, config?: AxiosRequestConfig): Promise<operations.OrderTypesOneResponse>;
    /**
     * orderTypesUpdate - Update Order Type
     *
     * Update Order Type
    **/
    orderTypesUpdate(req: operations.OrderTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OrderTypesUpdateResponse>;
}
