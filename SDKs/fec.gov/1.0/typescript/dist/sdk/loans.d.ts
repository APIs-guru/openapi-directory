import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Loans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSchedulesScheduleC -
     * Schedule C shows all loans, endorsements and loan guarantees a committee
     * receives or makes.
     *
     * The committee continues to report the loan until it is repaid.
     *
    **/
    getSchedulesScheduleC(req: operations.GetSchedulesScheduleCRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleCResponse>;
    /**
     * getSchedulesScheduleCSubId -
     * Schedule C shows all loans, endorsements and loan guarantees a committee
     * receives or makes.
     *
     * The committee continues to report the loan until it is repaid.
     *
    **/
    getSchedulesScheduleCSubId(req: operations.GetSchedulesScheduleCSubIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleCSubIdResponse>;
}
