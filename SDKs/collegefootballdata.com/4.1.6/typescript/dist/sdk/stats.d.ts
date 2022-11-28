import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAdvancedTeamGameStats - Advanced team metrics by game
     *
     * Advanced team game stats
    **/
    getAdvancedTeamGameStats(req: operations.GetAdvancedTeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedTeamGameStatsResponse>;
    /**
     * getAdvancedTeamSeasonStats - Advanced team metrics by season
     *
     * Advanced team season stats
    **/
    getAdvancedTeamSeasonStats(req: operations.GetAdvancedTeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedTeamSeasonStatsResponse>;
    /**
     * getStatCategories - Team stat categories
     *
     * Stat category list
    **/
    getStatCategories(config?: AxiosRequestConfig): Promise<operations.GetStatCategoriesResponse>;
    /**
     * getTeamSeasonStats - Team statistics by season
     *
     * Team season stats
    **/
    getTeamSeasonStats(req: operations.GetTeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamSeasonStatsResponse>;
}
