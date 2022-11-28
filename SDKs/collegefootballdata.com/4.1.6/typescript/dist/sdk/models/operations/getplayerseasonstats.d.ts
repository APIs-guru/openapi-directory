import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlayerSeasonStatsQueryParams extends SpeakeasyBase {
    category?: string;
    conference?: string;
    endWeek?: number;
    seasonType?: string;
    startWeek?: number;
    team?: string;
    year: number;
}
export declare class GetPlayerSeasonStatsRequest extends SpeakeasyBase {
    queryParams: GetPlayerSeasonStatsQueryParams;
}
export declare class GetPlayerSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonStats?: shared.PlayerSeasonStat[];
    statusCode: number;
}
