import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams extends SpeakeasyBase {
    basePlanId: string;
    offerId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionsVersionVersion?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchPathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchQueryParams;
    request?: shared.SubscriptionOfferInput;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionOffer?: shared.SubscriptionOffer;
}
