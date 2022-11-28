import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherReviewsListPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherReviewsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    token?: string;
    translationLanguage?: string;
    userIp?: string;
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
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
