import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesSubscriptionsRefundPathParams extends SpeakeasyBase {
    packageName: string;
    subscriptionId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesSubscriptionsRefundQueryParams extends SpeakeasyBase {
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
export declare class AndroidpublisherPurchasesSubscriptionsRefundSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesSubscriptionsRefundRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesSubscriptionsRefundPathParams;
    queryParams: AndroidpublisherPurchasesSubscriptionsRefundQueryParams;
    security: AndroidpublisherPurchasesSubscriptionsRefundSecurity;
}
export declare class AndroidpublisherPurchasesSubscriptionsRefundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
