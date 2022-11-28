import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Players {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPlayerSeasonStats - Player stats by season
     *
     * Season player stats
    **/
    getPlayerSeasonStats(req: operations.GetPlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerSeasonStatsResponse>;
    /**
     * getPlayerUsage - Player usage metrics broken down by season
     *
     * Player usage metrics by season
    **/
    getPlayerUsage(req: operations.GetPlayerUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerUsageResponse>;
    /**
     * getReturningProduction - Team returning production metrics
     *
     * Returning production metrics
    **/
    getReturningProduction(req: operations.GetReturningProductionRequest, config?: AxiosRequestConfig): Promise<operations.GetReturningProductionResponse>;
    /**
     * playerSearch - Search for player information
     *
     * Search for players
    **/
    playerSearch(req: operations.PlayerSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSearchResponse>;
}
