import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metrics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGamePpa - Team Predicated Points Added (PPA/EPA) by game
     *
     * Predicted Points Added (PPA) by game
    **/
    getGamePpa(req: operations.GetGamePpaRequest, config?: AxiosRequestConfig): Promise<operations.GetGamePpaResponse>;
    /**
     * getPlayerGamePpa - Player Predicated Points Added (PPA/EPA) broken down by game
     *
     * Predicted Points Added (PPA) by player game
    **/
    getPlayerGamePpa(req: operations.GetPlayerGamePpaRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerGamePpaResponse>;
    /**
     * getPlayerSeasonPpa - Player Predicated Points Added (PPA/EPA) broken down by season
     *
     * Predicted Points Added (PPA) by player season
    **/
    getPlayerSeasonPpa(req: operations.GetPlayerSeasonPpaRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerSeasonPpaResponse>;
    /**
     * getPredictedPoints - Predicted Points (i.e. Expected Points or EP)
     *
     * Predicted Points
    **/
    getPredictedPoints(req: operations.GetPredictedPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetPredictedPointsResponse>;
    /**
     * getPregameWinProbabilities - Pregame win probability data
     *
     * Pregame win probabilities
    **/
    getPregameWinProbabilities(req: operations.GetPregameWinProbabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetPregameWinProbabilitiesResponse>;
    /**
     * getTeamPpa - Predicted Points Added (PPA/EPA) data by team
     *
     * Predicted Points Added (PPA)
    **/
    getTeamPpa(req: operations.GetTeamPpaRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamPpaResponse>;
    /**
     * getWinProbabilityData - Win probability chart data
     *
     * Win probability data
    **/
    getWinProbabilityData(req: operations.GetWinProbabilityDataRequest, config?: AxiosRequestConfig): Promise<operations.GetWinProbabilityDataResponse>;
}
