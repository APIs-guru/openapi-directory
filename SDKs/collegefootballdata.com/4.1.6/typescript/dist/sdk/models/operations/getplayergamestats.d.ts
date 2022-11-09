import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPlayerGameStatsQueryParams extends SpeakeasyBase {
    category?: string;
    conference?: string;
    gameId?: number;
    seasonType?: string;
    team?: string;
    week?: number;
    year: number;
}
export declare class GetPlayerGameStatsRequest extends SpeakeasyBase {
    queryParams: GetPlayerGameStatsQueryParams;
}
export declare class GetPlayerGameStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: shared.PlayerGame[];
    statusCode: number;
}
