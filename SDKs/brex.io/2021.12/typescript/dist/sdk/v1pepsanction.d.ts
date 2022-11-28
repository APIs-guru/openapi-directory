import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1Pepsanction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pepMonitorList - Retrieves a list of monitor entries
     *
     * Retrieve a list of all active Pep Sanction Report monitors for this account
    **/
    pepMonitorList(req: operations.PepMonitorListRequest, config?: AxiosRequestConfig): Promise<operations.PepMonitorListResponse>;
    /**
     * pepMonitorUnregister - Deactive a pep sanction monitor
     *
     * Unregister a previously created Pep Sanction Report Monitor
    **/
    pepMonitorUnregister(req: operations.PepMonitorUnregisterRequest, config?: AxiosRequestConfig): Promise<operations.PepMonitorUnregisterResponse>;
    /**
     * pepMonitorUpdate - Update details of active Pep Sanction monitor
     *
     * Update the webhook URL of an active Pep Sanction Report Monitor
    **/
    pepMonitorUpdate(req: operations.PepMonitorUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PepMonitorUpdateResponse>;
    /**
     * pepOrder - Orders a new Pep Sanction Check Report
     *
     * Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.
    **/
    pepOrder(req: operations.PepOrderRequest, config?: AxiosRequestConfig): Promise<operations.PepOrderResponse>;
    /**
     * pepRetrieve - Returns a json or pdf report
     *
     * Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header
    **/
    pepRetrieve(req: operations.PepRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.PepRetrieveResponse>;
}
