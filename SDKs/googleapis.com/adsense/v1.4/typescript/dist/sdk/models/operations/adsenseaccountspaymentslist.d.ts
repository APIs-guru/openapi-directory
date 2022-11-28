import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsPaymentsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsenseAccountsPaymentsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsPaymentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsPaymentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsPaymentsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsPaymentsListSecurityOption1;
    option2?: AdsenseAccountsPaymentsListSecurityOption2;
}
export declare class AdsenseAccountsPaymentsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsPaymentsListPathParams;
    queryParams: AdsenseAccountsPaymentsListQueryParams;
    security: AdsenseAccountsPaymentsListSecurity;
}
export declare class AdsenseAccountsPaymentsListResponse extends SpeakeasyBase {
    contentType: string;
    payments?: shared.Payments;
    statusCode: number;
}
