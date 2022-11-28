import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeletePathParams extends SpeakeasyBase {
    basePlanId: string;
    packageName: string;
    productId: string;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherMonetizationSubscriptionsBasePlansDeletePathParams;
    queryParams: AndroidpublisherMonetizationSubscriptionsBasePlansDeleteQueryParams;
    security: AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity;
}
export declare class AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
