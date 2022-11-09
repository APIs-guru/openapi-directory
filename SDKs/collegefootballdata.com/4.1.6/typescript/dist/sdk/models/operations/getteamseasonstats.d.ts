import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTeamSeasonStatsQueryParams extends SpeakeasyBase {
    conference?: string;
    endWeek?: number;
    startWeek?: number;
    team?: string;
    year?: number;
}
export declare class GetTeamSeasonStatsRequest extends SpeakeasyBase {
    queryParams: GetTeamSeasonStatsQueryParams;
}
export declare class GetTeamSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamSeasonStats?: shared.TeamSeasonStat[];
}
