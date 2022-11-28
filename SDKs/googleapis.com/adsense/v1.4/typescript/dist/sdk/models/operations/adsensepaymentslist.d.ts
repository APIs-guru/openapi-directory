import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensePaymentsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensePaymentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensePaymentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensePaymentsListSecurity extends SpeakeasyBase {
    option1?: AdsensePaymentsListSecurityOption1;
    option2?: AdsensePaymentsListSecurityOption2;
}
export declare class AdsensePaymentsListRequest extends SpeakeasyBase {
    queryParams: AdsensePaymentsListQueryParams;
    security: AdsensePaymentsListSecurity;
}
export declare class AdsensePaymentsListResponse extends SpeakeasyBase {
    contentType: string;
    payments?: shared.Payments;
    statusCode: number;
}
