import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAdunitsGetAdCodePathParams extends SpeakeasyBase {
    adClientId: string;
    adUnitId: string;
}
export declare class AdsenseAdunitsGetAdCodeQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAdunitsGetAdCodeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsGetAdCodeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsGetAdCodeSecurity extends SpeakeasyBase {
    option1?: AdsenseAdunitsGetAdCodeSecurityOption1;
    option2?: AdsenseAdunitsGetAdCodeSecurityOption2;
}
export declare class AdsenseAdunitsGetAdCodeRequest extends SpeakeasyBase {
    pathParams: AdsenseAdunitsGetAdCodePathParams;
    queryParams: AdsenseAdunitsGetAdCodeQueryParams;
    security: AdsenseAdunitsGetAdCodeSecurity;
}
export declare class AdsenseAdunitsGetAdCodeResponse extends SpeakeasyBase {
    adCode?: shared.AdCode;
    contentType: string;
    statusCode: number;
}
