import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsSitesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdsenseAccountsSitesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdsenseAccountsSitesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSitesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSitesGetSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsSitesGetSecurityOption1;
    option2?: AdsenseAccountsSitesGetSecurityOption2;
}
export declare class AdsenseAccountsSitesGetRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsSitesGetPathParams;
    queryParams: AdsenseAccountsSitesGetQueryParams;
    security: AdsenseAccountsSitesGetSecurity;
}
export declare class AdsenseAccountsSitesGetResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
