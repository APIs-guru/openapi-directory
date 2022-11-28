import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsDeletePathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsDeletePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsDeleteQueryParams;
    security: AndroidpublisherMonetizationSubscriptionsDeleteSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
