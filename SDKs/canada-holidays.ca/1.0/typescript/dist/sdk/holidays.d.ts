import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Holidays {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiV1Holidays - Get all holidays
     *
     * Returns Canadian public holidays. Each holiday lists the regions that observe it.
    **/
    getApiV1Holidays(req: operations.GetApiV1HolidaysRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1HolidaysResponse>;
    /**
     * getHolidaysHolidayId - Get a holiday by id
     *
     * Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.
    **/
    getHolidaysHolidayId(req: operations.GetHolidaysHolidayIdRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaysHolidayIdResponse>;
}
