import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ratings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConferenceSpRatings - Historical SP+ ratings by conference
     *
     * Get average SP+ historical rating data by conference
    **/
    getConferenceSpRatings(req: operations.GetConferenceSpRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetConferenceSpRatingsResponse>;
    /**
     * getSpRatings - Historical SP+ ratings
     *
     * SP+ rating data
    **/
    getSpRatings(req: operations.GetSpRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpRatingsResponse>;
    /**
     * getSrsRatings - Historical SRS ratings
     *
     * SRS rating data (requires either a year or team specified)
    **/
    getSrsRatings(req: operations.GetSrsRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSrsRatingsResponse>;
}
