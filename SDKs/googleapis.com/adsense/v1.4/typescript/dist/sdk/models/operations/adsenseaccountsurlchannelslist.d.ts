import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsUrlchannelsListPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsenseAccountsUrlchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsUrlchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsUrlchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsUrlchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsUrlchannelsListSecurityOption1;
    option2?: AdsenseAccountsUrlchannelsListSecurityOption2;
}
export declare class AdsenseAccountsUrlchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsUrlchannelsListPathParams;
    queryParams: AdsenseAccountsUrlchannelsListQueryParams;
    security: AdsenseAccountsUrlchannelsListSecurity;
}
export declare class AdsenseAccountsUrlchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    urlChannels?: shared.UrlChannels;
}
