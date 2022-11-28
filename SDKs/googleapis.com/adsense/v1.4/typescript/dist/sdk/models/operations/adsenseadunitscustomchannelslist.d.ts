import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAdunitsCustomchannelsListPathParams extends SpeakeasyBase {
    adClientId: string;
    adUnitId: string;
}
export declare class AdsenseAdunitsCustomchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAdunitsCustomchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsCustomchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsCustomchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAdunitsCustomchannelsListSecurityOption1;
    option2?: AdsenseAdunitsCustomchannelsListSecurityOption2;
}
export declare class AdsenseAdunitsCustomchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAdunitsCustomchannelsListPathParams;
    queryParams: AdsenseAdunitsCustomchannelsListQueryParams;
    security: AdsenseAdunitsCustomchannelsListSecurity;
}
export declare class AdsenseAdunitsCustomchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    customChannels?: shared.CustomChannels;
    statusCode: number;
}
