import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherReviewsListPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherReviewsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    token?: string;
    translationLanguage?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherReviewsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherReviewsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherReviewsListPathParams;
    queryParams: AndroidpublisherReviewsListQueryParams;
    security: AndroidpublisherReviewsListSecurity;
}
export declare class AndroidpublisherReviewsListResponse extends SpeakeasyBase {
    contentType: string;
    reviewsListResponse?: shared.ReviewsListResponse;
    statusCode: number;
}
