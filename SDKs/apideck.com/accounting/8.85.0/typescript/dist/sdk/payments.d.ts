import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * paymentsAdd - Create Payment
     *
     * Create Payment
    **/
    paymentsAdd(req: operations.PaymentsAddRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsAddResponse>;
    /**
     * paymentsAll - List Payments
     *
     * List Payments
    **/
    paymentsAll(req: operations.PaymentsAllRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsAllResponse>;
    /**
     * paymentsDelete - Delete Payment
     *
     * Delete Payment
    **/
    paymentsDelete(req: operations.PaymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsDeleteResponse>;
    /**
     * paymentsOne - Get Payment
     *
     * Get Payment
    **/
    paymentsOne(req: operations.PaymentsOneRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsOneResponse>;
    /**
     * paymentsUpdate - Update Payment
     *
     * Update Payment
    **/
    paymentsUpdate(req: operations.PaymentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsUpdateResponse>;
}
