import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdunitsListPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsenseAccountsAdunitsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeInactive?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsAdunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdunitsListSecurityOption1;
    option2?: AdsenseAccountsAdunitsListSecurityOption2;
}
export declare class AdsenseAccountsAdunitsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdunitsListPathParams;
    queryParams: AdsenseAccountsAdunitsListQueryParams;
    security: AdsenseAccountsAdunitsListSecurity;
}
export declare class AdsenseAccountsAdunitsListResponse extends SpeakeasyBase {
    adUnits?: shared.AdUnits;
    contentType: string;
    statusCode: number;
}
