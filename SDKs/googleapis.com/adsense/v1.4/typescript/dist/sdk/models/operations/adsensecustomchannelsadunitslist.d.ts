import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseCustomchannelsAdunitsListPathParams extends SpeakeasyBase {
    adClientId: string;
    customChannelId: string;
}
export declare class AdsenseCustomchannelsAdunitsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseCustomchannelsAdunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseCustomchannelsAdunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseCustomchannelsAdunitsListSecurity extends SpeakeasyBase {
    option1?: AdsenseCustomchannelsAdunitsListSecurityOption1;
    option2?: AdsenseCustomchannelsAdunitsListSecurityOption2;
}
export declare class AdsenseCustomchannelsAdunitsListRequest extends SpeakeasyBase {
    pathParams: AdsenseCustomchannelsAdunitsListPathParams;
    queryParams: AdsenseCustomchannelsAdunitsListQueryParams;
    security: AdsenseCustomchannelsAdunitsListSecurity;
}
export declare class AdsenseCustomchannelsAdunitsListResponse extends SpeakeasyBase {
    adUnits?: shared.AdUnits;
    contentType: string;
    statusCode: number;
}
