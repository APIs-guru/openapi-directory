import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesSubscriptionsCancelPathParams extends SpeakeasyBase {
    packageName: string;
    subscriptionId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesSubscriptionsCancelQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherPurchasesSubscriptionsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesSubscriptionsCancelRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesSubscriptionsCancelPathParams;
    queryParams: AndroidpublisherPurchasesSubscriptionsCancelQueryParams;
    security: AndroidpublisherPurchasesSubscriptionsCancelSecurity;
}
export declare class AndroidpublisherPurchasesSubscriptionsCancelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
