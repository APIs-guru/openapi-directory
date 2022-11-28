import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Draft {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDraftPicks - List of NFL Draft picks
     *
     * List of NFL Draft picks
    **/
    getDraftPicks(req: operations.GetDraftPicksRequest, config?: AxiosRequestConfig): Promise<operations.GetDraftPicksResponse>;
    /**
     * getNflPositions - List of NFL positions
     *
     * List of NFL positions
    **/
    getNflPositions(config?: AxiosRequestConfig): Promise<operations.GetNflPositionsResponse>;
    /**
     * getNflTeams - List of NFL teams
     *
     * List of NFL teams
    **/
    getNflTeams(config?: AxiosRequestConfig): Promise<operations.GetNflTeamsResponse>;
}
