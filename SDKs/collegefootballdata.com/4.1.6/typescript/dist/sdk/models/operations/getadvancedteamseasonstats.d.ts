import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAdvancedTeamSeasonStatsQueryParams extends SpeakeasyBase {
    endWeek?: number;
    excludeGarbageTime?: boolean;
    startWeek?: number;
    team?: string;
    year?: number;
}
export declare class GetAdvancedTeamSeasonStatsRequest extends SpeakeasyBase {
    queryParams: GetAdvancedTeamSeasonStatsQueryParams;
}
export declare class GetAdvancedTeamSeasonStatsResponse extends SpeakeasyBase {
    advancedSeasonStats?: shared.AdvancedSeasonStat[];
    contentType: string;
    statusCode: number;
}
