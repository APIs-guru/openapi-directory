import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesSubscriptionsGetPathParams extends SpeakeasyBase {
    packageName: string;
    subscriptionId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesSubscriptionsGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherPurchasesSubscriptionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesSubscriptionsGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesSubscriptionsGetPathParams;
    queryParams: AndroidpublisherPurchasesSubscriptionsGetQueryParams;
    security: AndroidpublisherPurchasesSubscriptionsGetSecurity;
}
export declare class AndroidpublisherPurchasesSubscriptionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionPurchase?: shared.SubscriptionPurchase;
}
