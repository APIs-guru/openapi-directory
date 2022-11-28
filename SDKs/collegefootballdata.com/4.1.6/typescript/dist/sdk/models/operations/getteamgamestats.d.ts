import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamGameStatsQueryParams extends SpeakeasyBase {
    conference?: string;
    gameId?: number;
    seasonType?: string;
    team?: string;
    week?: number;
    year: number;
}
export declare class GetTeamGameStatsRequest extends SpeakeasyBase {
    queryParams: GetTeamGameStatsQueryParams;
}
export declare class GetTeamGameStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamGames?: shared.TeamGame[];
}
