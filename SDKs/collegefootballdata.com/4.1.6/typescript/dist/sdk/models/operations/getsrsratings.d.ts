import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSrsRatingsQueryParams extends SpeakeasyBase {
    conference?: string;
    team?: string;
    year?: number;
}
export declare class GetSrsRatingsRequest extends SpeakeasyBase {
    queryParams: GetSrsRatingsQueryParams;
}
export declare class GetSrsRatingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamSrsRatings?: shared.TeamSrsRating[];
}
