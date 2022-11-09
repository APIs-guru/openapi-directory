import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAdvancedTeamGameStatsQueryParams extends SpeakeasyBase {
    excludeGarbageTime?: boolean;
    opponent?: string;
    seasonType?: string;
    team?: string;
    week?: number;
    year?: number;
}
export declare class GetAdvancedTeamGameStatsRequest extends SpeakeasyBase {
    queryParams: GetAdvancedTeamGameStatsQueryParams;
}
export declare class GetAdvancedTeamGameStatsResponse extends SpeakeasyBase {
    advancedGameStats?: shared.AdvancedGameStat[];
    contentType: string;
    statusCode: number;
}
