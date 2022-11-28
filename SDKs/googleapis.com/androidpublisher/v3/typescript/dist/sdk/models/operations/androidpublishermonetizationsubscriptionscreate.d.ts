import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsCreatePathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    productId?: string;
    quotaUser?: string;
    regionsVersionVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsCreateRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsCreatePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsCreateQueryParams;
    request?: shared.SubscriptionInput;
    security: AndroidpublisherMonetizationSubscriptionsCreateSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
