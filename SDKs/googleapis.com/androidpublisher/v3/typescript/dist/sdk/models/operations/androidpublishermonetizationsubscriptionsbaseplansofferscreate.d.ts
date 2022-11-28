import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams extends SpeakeasyBase {
    basePlanId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    offerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionsVersionVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams;
    request?: shared.SubscriptionOfferInput;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionOffer?: shared.SubscriptionOffer;
}
