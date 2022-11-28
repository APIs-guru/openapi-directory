import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsCustomchannelsAdunitsListPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    customChannelId: string;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsCustomchannelsAdunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsCustomchannelsAdunitsListSecurityOption1;
    option2?: AdsenseAccountsCustomchannelsAdunitsListSecurityOption2;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsCustomchannelsAdunitsListPathParams;
    queryParams: AdsenseAccountsCustomchannelsAdunitsListQueryParams;
    security: AdsenseAccountsCustomchannelsAdunitsListSecurity;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListResponse extends SpeakeasyBase {
    adUnits?: shared.AdUnits;
    contentType: string;
    statusCode: number;
}
