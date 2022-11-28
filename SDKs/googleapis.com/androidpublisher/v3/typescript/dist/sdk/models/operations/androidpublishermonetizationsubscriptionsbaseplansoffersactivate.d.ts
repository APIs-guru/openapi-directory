import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivatePathParams extends SpeakeasyBase {
    basePlanId: string;
    offerId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivatePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateQueryParams;
    request?: Map<string, any>;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionOffer?: shared.SubscriptionOffer;
}
