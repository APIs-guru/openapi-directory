import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ordersAdd - Create Order
     *
     * Create Order
    **/
    ordersAdd(req: operations.OrdersAddRequest, config?: AxiosRequestConfig): Promise<operations.OrdersAddResponse>;
    /**
     * ordersAll - List Orders
     *
     * List Orders
    **/
    ordersAll(req: operations.OrdersAllRequest, config?: AxiosRequestConfig): Promise<operations.OrdersAllResponse>;
    /**
     * ordersDelete - Delete Order
     *
     * Delete Order
    **/
    ordersDelete(req: operations.OrdersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OrdersDeleteResponse>;
    /**
     * ordersOne - Get Order
     *
     * Get Order
    **/
    ordersOne(req: operations.OrdersOneRequest, config?: AxiosRequestConfig): Promise<operations.OrdersOneResponse>;
    /**
     * ordersPay - Pay Order
     *
     * Pay Order
    **/
    ordersPay(req: operations.OrdersPayRequest, config?: AxiosRequestConfig): Promise<operations.OrdersPayResponse>;
    /**
     * ordersUpdate - Update Order
     *
     * Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).
     *
    **/
    ordersUpdate(req: operations.OrdersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OrdersUpdateResponse>;
}
