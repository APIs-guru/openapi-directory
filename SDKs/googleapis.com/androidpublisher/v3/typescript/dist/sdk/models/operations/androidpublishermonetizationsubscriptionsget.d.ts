import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsGetPathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsGetPathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsGetQueryParams;
    security: AndroidpublisherMonetizationSubscriptionsGetSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscription?: shared.Subscription;
}
