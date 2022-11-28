import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesSubscriptionsDeferPathParams extends SpeakeasyBase {
    packageName: string;
    subscriptionId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesSubscriptionsDeferQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherPurchasesSubscriptionsDeferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesSubscriptionsDeferRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesSubscriptionsDeferPathParams;
    queryParams: AndroidpublisherPurchasesSubscriptionsDeferQueryParams;
    request?: shared.SubscriptionPurchasesDeferRequest;
    security: AndroidpublisherPurchasesSubscriptionsDeferSecurity;
}
export declare class AndroidpublisherPurchasesSubscriptionsDeferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionPurchasesDeferResponse?: shared.SubscriptionPurchasesDeferResponse;
}
