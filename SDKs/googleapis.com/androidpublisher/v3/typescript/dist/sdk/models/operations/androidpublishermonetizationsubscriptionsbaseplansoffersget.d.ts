import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams extends SpeakeasyBase {
    basePlanId: string;
    offerId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetPathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetQueryParams;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionOffer?: shared.SubscriptionOffer;
}
