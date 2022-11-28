import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeactivatePathParams extends SpeakeasyBase {
    basePlanId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansDeactivatePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateQueryParams;
    request?: Map<string, any>;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
