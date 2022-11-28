import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesCancelPathParams extends SpeakeasyBase {
    packageName: string;
    subscriptionId: string;
    token: string;
}
export declare class AndroidpublisherPurchasesCancelQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherPurchasesCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesCancelRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesCancelPathParams;
    queryParams: AndroidpublisherPurchasesCancelQueryParams;
    security: AndroidpublisherPurchasesCancelSecurity;
}
export declare class AndroidpublisherPurchasesCancelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
