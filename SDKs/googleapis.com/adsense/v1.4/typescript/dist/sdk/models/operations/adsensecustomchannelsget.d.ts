import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseCustomchannelsGetPathParams extends SpeakeasyBase {
    adClientId: string;
    customChannelId: string;
}
export declare class AdsenseCustomchannelsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseCustomchannelsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseCustomchannelsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseCustomchannelsGetSecurity extends SpeakeasyBase {
    option1?: AdsenseCustomchannelsGetSecurityOption1;
    option2?: AdsenseCustomchannelsGetSecurityOption2;
}
export declare class AdsenseCustomchannelsGetRequest extends SpeakeasyBase {
    pathParams: AdsenseCustomchannelsGetPathParams;
    queryParams: AdsenseCustomchannelsGetQueryParams;
    security: AdsenseCustomchannelsGetSecurity;
}
export declare class AdsenseCustomchannelsGetResponse extends SpeakeasyBase {
    contentType: string;
    customChannel?: shared.CustomChannel;
    statusCode: number;
}
