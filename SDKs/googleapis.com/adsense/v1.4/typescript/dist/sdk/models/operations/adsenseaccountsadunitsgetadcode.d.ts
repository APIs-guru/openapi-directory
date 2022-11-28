import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdunitsGetAdCodePathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    adUnitId: string;
}
export declare class AdsenseAccountsAdunitsGetAdCodeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsAdunitsGetAdCodeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsGetAdCodeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsGetAdCodeSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdunitsGetAdCodeSecurityOption1;
    option2?: AdsenseAccountsAdunitsGetAdCodeSecurityOption2;
}
export declare class AdsenseAccountsAdunitsGetAdCodeRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdunitsGetAdCodePathParams;
    queryParams: AdsenseAccountsAdunitsGetAdCodeQueryParams;
    security: AdsenseAccountsAdunitsGetAdCodeSecurity;
}
export declare class AdsenseAccountsAdunitsGetAdCodeResponse extends SpeakeasyBase {
    adCode?: shared.AdCode;
    contentType: string;
    statusCode: number;
}
