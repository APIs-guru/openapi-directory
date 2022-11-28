import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseCustomchannelsListPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsenseCustomchannelsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseCustomchannelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseCustomchannelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseCustomchannelsListSecurity extends SpeakeasyBase {
    option1?: AdsenseCustomchannelsListSecurityOption1;
    option2?: AdsenseCustomchannelsListSecurityOption2;
}
export declare class AdsenseCustomchannelsListRequest extends SpeakeasyBase {
    pathParams: AdsenseCustomchannelsListPathParams;
    queryParams: AdsenseCustomchannelsListQueryParams;
    security: AdsenseCustomchannelsListSecurity;
}
export declare class AdsenseCustomchannelsListResponse extends SpeakeasyBase {
    contentType: string;
    customChannels?: shared.CustomChannels;
    statusCode: number;
}
