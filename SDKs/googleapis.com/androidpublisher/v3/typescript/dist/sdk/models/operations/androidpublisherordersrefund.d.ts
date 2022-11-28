import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherOrdersRefundPathParams extends SpeakeasyBase {
    orderId: string;
    packageName: string;
}
export declare class AndroidpublisherOrdersRefundQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    revoke?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidpublisherOrdersRefundSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherOrdersRefundRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherOrdersRefundPathParams;
    queryParams: AndroidpublisherOrdersRefundQueryParams;
    security: AndroidpublisherOrdersRefundSecurity;
}
export declare class AndroidpublisherOrdersRefundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
