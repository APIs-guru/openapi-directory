import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersListPathParams extends SpeakeasyBase {
    basePlanId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersListPathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersListQueryParams;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse extends SpeakeasyBase {
    contentType: string;
    listSubscriptionOffersResponse?: shared.ListSubscriptionOffersResponse;
    statusCode: number;
}
