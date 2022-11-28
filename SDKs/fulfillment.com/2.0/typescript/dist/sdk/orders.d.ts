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
     * deleteOrdersId - Cancel an Order
     *
     * Request an order is canceled to prevent shipment.
    **/
    deleteOrdersId(req: operations.DeleteOrdersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrdersIdResponse>;
    /**
     * getOrders - List of Orders
     *
     * Retrieve many orders at once
    **/
    getOrders(req: operations.GetOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersResponse>;
    /**
     * getOrder - Order Details
     *
     * For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.
    **/
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * postOrders - New Order
     *
     * Error Notes&#58;
     * * When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.
     *
    **/
    postOrders(req: operations.PostOrdersRequest, config?: AxiosRequestConfig): Promise<operations.PostOrdersResponse>;
}
