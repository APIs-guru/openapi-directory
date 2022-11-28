import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherReviewsReplyPathParams extends SpeakeasyBase {
    packageName: string;
    reviewId: string;
}
export declare class AndroidpublisherReviewsReplyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherReviewsReplySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherReviewsReplyRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherReviewsReplyPathParams;
    queryParams: AndroidpublisherReviewsReplyQueryParams;
    request?: shared.ReviewsReplyRequest;
    security: AndroidpublisherReviewsReplySecurity;
}
export declare class AndroidpublisherReviewsReplyResponse extends SpeakeasyBase {
    contentType: string;
    reviewsReplyResponse?: shared.ReviewsReplyResponse;
    statusCode: number;
}
