import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Games {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAdvancedBoxScore - Advanced box scores
     *
     * Get advanced box score data
    **/
    getAdvancedBoxScore(req: operations.GetAdvancedBoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedBoxScoreResponse>;
    /**
     * getCalendar - Season calendar
     *
     * Get calendar of weeks by season
    **/
    getCalendar(req: operations.GetCalendarRequest, config?: AxiosRequestConfig): Promise<operations.GetCalendarResponse>;
    /**
     * getGameMedia - Game media information and schedules
     *
     * Game media information (TV, radio, etc)
    **/
    getGameMedia(req: operations.GetGameMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetGameMediaResponse>;
    /**
     * getGameWeather - Game weather information (Patreon only)
     *
     * Weather information for the hour of kickoff
    **/
    getGameWeather(req: operations.GetGameWeatherRequest, config?: AxiosRequestConfig): Promise<operations.GetGameWeatherResponse>;
    /**
     * getGames - Games and results
     *
     * Get game results
    **/
    getGames(req: operations.GetGamesRequest, config?: AxiosRequestConfig): Promise<operations.GetGamesResponse>;
    /**
     * getPlayerGameStats - Player game stats
     *
     * Player stats broken down by game
    **/
    getPlayerGameStats(req: operations.GetPlayerGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerGameStatsResponse>;
    /**
     * getTeamGameStats - Team game stats
     *
     * Team stats broken down by game
    **/
    getTeamGameStats(req: operations.GetTeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamGameStatsResponse>;
    /**
     * getTeamRecords - Team records
     *
     * Get team records by year
    **/
    getTeamRecords(req: operations.GetTeamRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamRecordsResponse>;
}
