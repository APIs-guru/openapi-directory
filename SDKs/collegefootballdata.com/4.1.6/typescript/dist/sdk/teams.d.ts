import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFbsTeams - FBS team list
     *
     * Information on major division teams
    **/
    getFbsTeams(req: operations.GetFbsTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetFbsTeamsResponse>;
    /**
     * getRoster - Team rosters
     *
     * Roster data
    **/
    getRoster(req: operations.GetRosterRequest, config?: AxiosRequestConfig): Promise<operations.GetRosterResponse>;
    /**
     * getTalent - Team talent composite rankings
     *
     * Team talent composite
    **/
    getTalent(req: operations.GetTalentRequest, config?: AxiosRequestConfig): Promise<operations.GetTalentResponse>;
    /**
     * getTeamMatchup - Team matchup history
     *
     * Matchup history
    **/
    getTeamMatchup(req: operations.GetTeamMatchupRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchupResponse>;
    /**
     * getTeams - Team information
     *
     * Get team information
    **/
    getTeams(req: operations.GetTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
}
