import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAdunitsGetPathParams extends SpeakeasyBase {
    adClientId: string;
    adUnitId: string;
}
export declare class AdsenseAdunitsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAdunitsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsGetSecurity extends SpeakeasyBase {
    option1?: AdsenseAdunitsGetSecurityOption1;
    option2?: AdsenseAdunitsGetSecurityOption2;
}
export declare class AdsenseAdunitsGetRequest extends SpeakeasyBase {
    pathParams: AdsenseAdunitsGetPathParams;
    queryParams: AdsenseAdunitsGetQueryParams;
    security: AdsenseAdunitsGetSecurity;
}
export declare class AdsenseAdunitsGetResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
