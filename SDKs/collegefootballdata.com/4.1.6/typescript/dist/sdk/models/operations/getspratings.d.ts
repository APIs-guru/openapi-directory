import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSpRatingsQueryParams extends SpeakeasyBase {
    team?: string;
    year?: number;
}
export declare class GetSpRatingsRequest extends SpeakeasyBase {
    queryParams: GetSpRatingsQueryParams;
}
export declare class GetSpRatingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamSpRatings?: shared.TeamSpRating[];
}
