import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRankingsQueryParams extends SpeakeasyBase {
    seasonType?: string;
    week?: number;
    year: number;
}
export declare class GetRankingsRequest extends SpeakeasyBase {
    queryParams: GetRankingsQueryParams;
}
export declare class GetRankingsResponse extends SpeakeasyBase {
    contentType: string;
    rankingWeeks?: shared.RankingWeek[];
    statusCode: number;
}
