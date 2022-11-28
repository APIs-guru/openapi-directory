import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansActivatePathParams extends SpeakeasyBase {
    basePlanId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansActivateQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansActivatePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansActivateQueryParams;
    request?: Map<string, any>;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
