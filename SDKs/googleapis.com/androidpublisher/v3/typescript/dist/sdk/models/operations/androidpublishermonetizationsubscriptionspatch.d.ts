import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsPatchPathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsPatchQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsPatchRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsPatchPathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsPatchQueryParams;
    request?: shared.SubscriptionInput;
    security: AndroidpublisherMonetizationSubscriptionsPatchSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
