import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseUrlchannelsListPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsenseUrlchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseUrlchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseUrlchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseUrlchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseUrlchannelsListSecurityOption1;
    option2?: AdsenseUrlchannelsListSecurityOption2;
}
export declare class AdsenseUrlchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseUrlchannelsListPathParams;
    queryParams: AdsenseUrlchannelsListQueryParams;
    security: AdsenseUrlchannelsListSecurity;
}
export declare class AdsenseUrlchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    urlChannels?: shared.UrlChannels;
}
