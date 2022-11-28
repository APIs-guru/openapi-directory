import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConferenceSpRatingsQueryParams extends SpeakeasyBase {
    conference?: string;
    year?: number;
}
export declare class GetConferenceSpRatingsRequest extends SpeakeasyBase {
    queryParams: GetConferenceSpRatingsQueryParams;
}
export declare class GetConferenceSpRatingsResponse extends SpeakeasyBase {
    conferenceSpRatings?: shared.ConferenceSpRating[];
    contentType: string;
    statusCode: number;
}
