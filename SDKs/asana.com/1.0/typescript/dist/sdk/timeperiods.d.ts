import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TimePeriods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTimePeriod - Get a time period
     *
     * Returns the full record for a single time period.
    **/
    getTimePeriod(req: operations.GetTimePeriodRequest, config?: AxiosRequestConfig): Promise<operations.GetTimePeriodResponse>;
    /**
     * getTimePeriods - Get time periods
     *
     * Returns compact time period records.
    **/
    getTimePeriods(req: operations.GetTimePeriodsRequest, config?: AxiosRequestConfig): Promise<operations.GetTimePeriodsResponse>;
}
