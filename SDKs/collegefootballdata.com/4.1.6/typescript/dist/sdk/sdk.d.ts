import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Get advanced box score data
    **/
    GetAdvancedBoxScore(req: operations.GetAdvancedBoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedBoxScoreResponse>;
    /**
     * Advanced team game stats
    **/
    GetAdvancedTeamGameStats(req: operations.GetAdvancedTeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedTeamGameStatsResponse>;
    /**
     * Advanced team season stats
    **/
    GetAdvancedTeamSeasonStats(req: operations.GetAdvancedTeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdvancedTeamSeasonStatsResponse>;
    /**
     * Get calendar of weeks by season
    **/
    GetCalendar(req: operations.GetCalendarRequest, config?: AxiosRequestConfig): Promise<operations.GetCalendarResponse>;
    /**
     * Coaching history
    **/
    GetCoaches(req: operations.GetCoachesRequest, config?: AxiosRequestConfig): Promise<operations.GetCoachesResponse>;
    /**
     * Get average SP+ historical rating data by conference
    **/
    GetConferenceSpRatings(req: operations.GetConferenceSpRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetConferenceSpRatingsResponse>;
    /**
     * Get conference list
    **/
    GetConferences(config?: AxiosRequestConfig): Promise<operations.GetConferencesResponse>;
    /**
     * List of NFL Draft picks
    **/
    GetDraftPicks(req: operations.GetDraftPicksRequest, config?: AxiosRequestConfig): Promise<operations.GetDraftPicksResponse>;
    /**
     * Get game drives
    **/
    GetDrives(req: operations.GetDrivesRequest, config?: AxiosRequestConfig): Promise<operations.GetDrivesResponse>;
    /**
     * Information on major division teams
    **/
    GetFbsTeams(req: operations.GetFbsTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetFbsTeamsResponse>;
    /**
     * Game media information (TV, radio, etc)
    **/
    GetGameMedia(req: operations.GetGameMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetGameMediaResponse>;
    /**
     * Predicted Points Added (PPA) by game
    **/
    GetGamePpa(req: operations.GetGamePpaRequest, config?: AxiosRequestConfig): Promise<operations.GetGamePpaResponse>;
    /**
     * Weather information for the hour of kickoff
    **/
    GetGameWeather(req: operations.GetGameWeatherRequest, config?: AxiosRequestConfig): Promise<operations.GetGameWeatherResponse>;
    /**
     * Get game results
    **/
    GetGames(req: operations.GetGamesRequest, config?: AxiosRequestConfig): Promise<operations.GetGamesResponse>;
    /**
     * Closing betting lines
    **/
    GetLines(req: operations.GetLinesRequest, config?: AxiosRequestConfig): Promise<operations.GetLinesResponse>;
    /**
     * List of NFL positions
    **/
    GetNflPositions(config?: AxiosRequestConfig): Promise<operations.GetNflPositionsResponse>;
    /**
     * List of NFL teams
    **/
    GetNflTeams(config?: AxiosRequestConfig): Promise<operations.GetNflTeamsResponse>;
    /**
     * Type of play stats
    **/
    GetPlayStatTypes(config?: AxiosRequestConfig): Promise<operations.GetPlayStatTypesResponse>;
    /**
     * Gets player stats associated by play (limit 1000)
    **/
    GetPlayStats(req: operations.GetPlayStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayStatsResponse>;
    /**
     * Types of plays
    **/
    GetPlayTypes(config?: AxiosRequestConfig): Promise<operations.GetPlayTypesResponse>;
    /**
     * Predicted Points Added (PPA) by player game
    **/
    GetPlayerGamePpa(req: operations.GetPlayerGamePpaRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerGamePpaResponse>;
    /**
     * Player stats broken down by game
    **/
    GetPlayerGameStats(req: operations.GetPlayerGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerGameStatsResponse>;
    /**
     * Predicted Points Added (PPA) by player season
    **/
    GetPlayerSeasonPpa(req: operations.GetPlayerSeasonPpaRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerSeasonPpaResponse>;
    /**
     * Season player stats
    **/
    GetPlayerSeasonStats(req: operations.GetPlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerSeasonStatsResponse>;
    /**
     * Player usage metrics by season
    **/
    GetPlayerUsage(req: operations.GetPlayerUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerUsageResponse>;
    /**
     * Get play data and results
    **/
    GetPlays(req: operations.GetPlaysRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaysResponse>;
    /**
     * Predicted Points
    **/
    GetPredictedPoints(req: operations.GetPredictedPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetPredictedPointsResponse>;
    /**
     * Pregame win probabilities
    **/
    GetPregameWinProbabilities(req: operations.GetPregameWinProbabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetPregameWinProbabilitiesResponse>;
    /**
     * Poll rankings
    **/
    GetRankings(req: operations.GetRankingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRankingsResponse>;
    /**
     * Gets a list of aggregated statistics by team and position grouping
    **/
    GetRecruitingGroups(req: operations.GetRecruitingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingGroupsResponse>;
    /**
     * Get player recruiting rankings and data. Requires either a year or team to be specified.
    **/
    GetRecruitingPlayers(req: operations.GetRecruitingPlayersRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingPlayersResponse>;
    /**
     * Team recruiting rankings
    **/
    GetRecruitingTeams(req: operations.GetRecruitingTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecruitingTeamsResponse>;
    /**
     * Returning production metrics
    **/
    GetReturningProduction(req: operations.GetReturningProductionRequest, config?: AxiosRequestConfig): Promise<operations.GetReturningProductionResponse>;
    /**
     * Roster data
    **/
    GetRoster(req: operations.GetRosterRequest, config?: AxiosRequestConfig): Promise<operations.GetRosterResponse>;
    /**
     * SP+ rating data
    **/
    GetSpRatings(req: operations.GetSpRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpRatingsResponse>;
    /**
     * SRS rating data (requires either a year or team specified)
    **/
    GetSrsRatings(req: operations.GetSrsRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSrsRatingsResponse>;
    /**
     * Stat category list
    **/
    GetStatCategories(config?: AxiosRequestConfig): Promise<operations.GetStatCategoriesResponse>;
    /**
     * Team talent composite
    **/
    GetTalent(req: operations.GetTalentRequest, config?: AxiosRequestConfig): Promise<operations.GetTalentResponse>;
    /**
     * Team stats broken down by game
    **/
    GetTeamGameStats(req: operations.GetTeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamGameStatsResponse>;
    /**
     * Matchup history
    **/
    GetTeamMatchup(req: operations.GetTeamMatchupRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchupResponse>;
    /**
     * Predicted Points Added (PPA)
    **/
    GetTeamPpa(req: operations.GetTeamPpaRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamPpaResponse>;
    /**
     * Get team records by year
    **/
    GetTeamRecords(req: operations.GetTeamRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamRecordsResponse>;
    /**
     * Team season stats
    **/
    GetTeamSeasonStats(req: operations.GetTeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamSeasonStatsResponse>;
    /**
     * Get team information
    **/
    GetTeams(req: operations.GetTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
    /**
     * Venues
    **/
    GetVenues(config?: AxiosRequestConfig): Promise<operations.GetVenuesResponse>;
    /**
     * Win probability data
    **/
    GetWinProbabilityData(req: operations.GetWinProbabilityDataRequest, config?: AxiosRequestConfig): Promise<operations.GetWinProbabilityDataResponse>;
    /**
     * Search for players
    **/
    PlayerSearch(req: operations.PlayerSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSearchResponse>;
}
export {};
