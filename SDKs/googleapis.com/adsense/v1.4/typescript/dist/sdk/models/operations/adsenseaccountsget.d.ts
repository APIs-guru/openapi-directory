import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsGetPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsenseAccountsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tree?: boolean;
    userIp?: string;
}
export declare class AdsenseAccountsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsGetSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsGetSecurityOption1;
    option2?: AdsenseAccountsGetSecurityOption2;
}
export declare class AdsenseAccountsGetRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsGetPathParams;
    queryParams: AdsenseAccountsGetQueryParams;
    security: AdsenseAccountsGetSecurity;
}
export declare class AdsenseAccountsGetResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
