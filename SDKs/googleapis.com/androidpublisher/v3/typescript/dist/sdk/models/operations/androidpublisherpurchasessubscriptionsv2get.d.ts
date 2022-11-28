import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesSubscriptionsv2GetPathParams extends SpeakeasyBase {
    packageName: string;
    token: string;
}
export declare class AndroidpublisherPurchasesSubscriptionsv2GetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherPurchasesSubscriptionsv2GetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesSubscriptionsv2GetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesSubscriptionsv2GetPathParams;
    queryParams: AndroidpublisherPurchasesSubscriptionsv2GetQueryParams;
    security: AndroidpublisherPurchasesSubscriptionsv2GetSecurity;
}
export declare class AndroidpublisherPurchasesSubscriptionsv2GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionPurchaseV2?: shared.SubscriptionPurchaseV2;
}
