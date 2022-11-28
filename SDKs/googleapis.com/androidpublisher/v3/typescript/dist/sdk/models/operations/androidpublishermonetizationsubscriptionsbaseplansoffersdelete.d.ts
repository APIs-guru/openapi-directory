import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams extends SpeakeasyBase {
    basePlanId: string;
    offerId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeletePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteQueryParams;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
