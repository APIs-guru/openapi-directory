import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdunitsGetPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    adUnitId: string;
}
export declare class AdsenseAccountsAdunitsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsAdunitsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsGetSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdunitsGetSecurityOption1;
    option2?: AdsenseAccountsAdunitsGetSecurityOption2;
}
export declare class AdsenseAccountsAdunitsGetRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdunitsGetPathParams;
    queryParams: AdsenseAccountsAdunitsGetQueryParams;
    security: AdsenseAccountsAdunitsGetSecurity;
}
export declare class AdsenseAccountsAdunitsGetResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
