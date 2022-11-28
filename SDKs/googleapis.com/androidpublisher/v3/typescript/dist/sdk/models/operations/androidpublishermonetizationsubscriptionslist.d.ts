import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsListPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showArchived?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsListPathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsListQueryParams;
    security: AndroidpublisherMonetizationSubscriptionsListSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsListResponse extends SpeakeasyBase {
    contentType: string;
    listSubscriptionsResponse?: shared.ListSubscriptionsResponse;
    statusCode: number;
}
