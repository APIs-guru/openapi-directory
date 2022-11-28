import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PartyCoordinatedExpenditures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSchedulesScheduleF -
     * Schedule F, it shows all special expenditures a national or state party committee
     * makes in connection with the general election campaigns of federal candidates.
     *
     * These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
     * these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
     *
    **/
    getSchedulesScheduleF(req: operations.GetSchedulesScheduleFRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleFResponse>;
    /**
     * getSchedulesScheduleFSubId -
     * Schedule F, it shows all special expenditures a national or state party committee
     * makes in connection with the general election campaigns of federal candidates.
     *
     * These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
     * these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.
     *
    **/
    getSchedulesScheduleFSubId(req: operations.GetSchedulesScheduleFSubIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesScheduleFSubIdResponse>;
}
