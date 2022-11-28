import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * putOrdersIdShip - Ship an Order
     *
     * Note, this API is used to update orders and is reserved for our shipping partners.
    **/
    putOrdersIdShip(req: operations.PutOrdersIdShipRequest, config?: AxiosRequestConfig): Promise<operations.PutOrdersIdShipResponse>;
    /**
     * putOrdersIdStatus - Update Order Status
     *
     * Note, this API is used to update orders and is reserved for our shipping partners.
    **/
    putOrdersIdStatus(req: operations.PutOrdersIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.PutOrdersIdStatusResponse>;
}
