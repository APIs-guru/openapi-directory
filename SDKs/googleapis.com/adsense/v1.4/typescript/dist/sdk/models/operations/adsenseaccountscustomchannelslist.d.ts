import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsCustomchannelsListPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsenseAccountsCustomchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsCustomchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsCustomchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsCustomchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsCustomchannelsListSecurityOption1;
    option2?: AdsenseAccountsCustomchannelsListSecurityOption2;
}
export declare class AdsenseAccountsCustomchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsCustomchannelsListPathParams;
    queryParams: AdsenseAccountsCustomchannelsListQueryParams;
    security: AdsenseAccountsCustomchannelsListSecurity;
}
export declare class AdsenseAccountsCustomchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    customChannels?: shared.CustomChannels;
    statusCode: number;
}
