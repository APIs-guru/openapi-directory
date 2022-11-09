import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPlayStatsQueryParams extends SpeakeasyBase {
    athleteId?: number;
    conference?: string;
    gameId?: number;
    seasonType?: string;
    statTypeId?: number;
    team?: string;
    week?: number;
    year?: number;
}
export declare class GetPlayStatsRequest extends SpeakeasyBase {
    queryParams: GetPlayStatsQueryParams;
}
export declare class GetPlayStatsResponse extends SpeakeasyBase {
    contentType: string;
    playStats?: shared.PlayStat[];
    statusCode: number;
}
