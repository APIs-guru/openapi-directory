import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeVideosVideoIdRatingPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetUsersMeVideosVideoIdRatingSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeVideosVideoIdRatingRequest extends SpeakeasyBase {
    pathParams: GetUsersMeVideosVideoIdRatingPathParams;
    security: GetUsersMeVideosVideoIdRatingSecurity;
}
export declare class GetUsersMeVideosVideoIdRatingResponse extends SpeakeasyBase {
    contentType: string;
    getMeVideoRating?: any;
    statusCode: number;
}
