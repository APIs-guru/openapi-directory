import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAdunitsCustomchannelsListPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    adUnitId: string;
}
export declare class AdsenseAccountsAdunitsCustomchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsAdunitsCustomchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsCustomchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAdunitsCustomchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdunitsCustomchannelsListSecurityOption1;
    option2?: AdsenseAccountsAdunitsCustomchannelsListSecurityOption2;
}
export declare class AdsenseAccountsAdunitsCustomchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAdunitsCustomchannelsListPathParams;
    queryParams: AdsenseAccountsAdunitsCustomchannelsListQueryParams;
    security: AdsenseAccountsAdunitsCustomchannelsListSecurity;
}
export declare class AdsenseAccountsAdunitsCustomchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    customChannels?: shared.CustomChannels;
    statusCode: number;
}
