import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams extends SpeakeasyBase {
    basePlanId: string;
    offerId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivatePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateQueryParams;
    request?: Map<string, any>;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionOffer?: shared.SubscriptionOffer;
}
