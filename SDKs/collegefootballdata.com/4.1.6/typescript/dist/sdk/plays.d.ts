import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Plays {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPlayStatTypes - Types of player play stats
     *
     * Type of play stats
    **/
    getPlayStatTypes(config?: AxiosRequestConfig): Promise<operations.GetPlayStatTypesResponse>;
    /**
     * getPlayStats - Play stats by play
     *
     * Gets player stats associated by play (limit 1000)
    **/
    getPlayStats(req: operations.GetPlayStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayStatsResponse>;
    /**
     * getPlayTypes - Play types
     *
     * Types of plays
    **/
    getPlayTypes(config?: AxiosRequestConfig): Promise<operations.GetPlayTypesResponse>;
    /**
     * getPlays - Play by play data
     *
     * Get play data and results
    **/
    getPlays(req: operations.GetPlaysRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaysResponse>;
}
