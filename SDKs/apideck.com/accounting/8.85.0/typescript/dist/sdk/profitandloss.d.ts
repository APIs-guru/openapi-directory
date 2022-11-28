import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProfitAndLoss {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * profitAndLossOne - Get Profit and Loss
     *
     * Get Profit and Loss
    **/
    profitAndLossOne(req: operations.ProfitAndLossOneRequest, config?: AxiosRequestConfig): Promise<operations.ProfitAndLossOneResponse>;
}
