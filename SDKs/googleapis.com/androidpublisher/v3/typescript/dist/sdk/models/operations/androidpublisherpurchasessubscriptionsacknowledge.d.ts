import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams extends SpeakeasyBase {
    packageName: string;
    subscriptionId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesSubscriptionsAcknowledgeRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesSubscriptionsAcknowledgePathParams;
    queryParams: AndroidpublisherPurchasesSubscriptionsAcknowledgeQueryParams;
    request?: shared.SubscriptionPurchasesAcknowledgeRequest;
    security: AndroidpublisherPurchasesSubscriptionsAcknowledgeSecurity;
}
export declare class AndroidpublisherPurchasesSubscriptionsAcknowledgeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
