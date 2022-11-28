import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAdunitsListPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsenseAdunitsListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAdunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAdunitsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAdunitsListSecurityOption1;
    option2?: AdsenseAdunitsListSecurityOption2;
}
export declare class AdsenseAdunitsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAdunitsListPathParams;
    queryParams: AdsenseAdunitsListQueryParams;
    security: AdsenseAdunitsListSecurity;
}
export declare class AdsenseAdunitsListResponse extends SpeakeasyBase {
    adUnits?: shared.AdUnits;
    contentType: string;
    statusCode: number;
}
