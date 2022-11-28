import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherReviewsGetPathParams extends SpeakeasyBase {
    packageName: string;
    reviewId: string;
}
export declare class AndroidpublisherReviewsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    translationLanguage?: string;
    userIp?: string;
}
export declare class AndroidpublisherReviewsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherReviewsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherReviewsGetPathParams;
    queryParams: AndroidpublisherReviewsGetQueryParams;
    security: AndroidpublisherReviewsGetSecurity;
}
export declare class AndroidpublisherReviewsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
