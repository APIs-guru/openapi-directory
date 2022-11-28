import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Recruiting {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRecruitingGroups - Recruit position group ratings
     *
     * Gets a list of aggregated statistics by team and position grouping
    **/
    getRecruitingGroups(req: operations.GetRecruitingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingGroupsResponse>;
    /**
     * getRecruitingPlayers - Player recruiting ratings and rankings
     *
     * Get player recruiting rankings and data. Requires either a year or team to be specified.
    **/
    getRecruitingPlayers(req: operations.GetRecruitingPlayersRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingPlayersResponse>;
    /**
     * getRecruitingTeams - Team recruiting rankings and ratings
     *
     * Team recruiting rankings
    **/
    getRecruitingTeams(req: operations.GetRecruitingTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingTeamsResponse>;
}
