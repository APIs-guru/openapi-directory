import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsListSecurityOption1;
    option2?: AdsenseAccountsListSecurityOption2;
}
export declare class AdsenseAccountsListRequest extends SpeakeasyBase {
    queryParams: AdsenseAccountsListQueryParams;
    security: AdsenseAccountsListSecurity;
}
export declare class AdsenseAccountsListResponse extends SpeakeasyBase {
    accounts?: shared.Accounts;
    contentType: string;
    statusCode: number;
}
