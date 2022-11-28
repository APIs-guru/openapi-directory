import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsSavedadstylesGetPathParams extends SpeakeasyBase {
    accountId: string;
    savedAdStyleId: string;
}
export declare class AdsenseAccountsSavedadstylesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsSavedadstylesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSavedadstylesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSavedadstylesGetSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsSavedadstylesGetSecurityOption1;
    option2?: AdsenseAccountsSavedadstylesGetSecurityOption2;
}
export declare class AdsenseAccountsSavedadstylesGetRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsSavedadstylesGetPathParams;
    queryParams: AdsenseAccountsSavedadstylesGetQueryParams;
    security: AdsenseAccountsSavedadstylesGetSecurity;
}
export declare class AdsenseAccountsSavedadstylesGetResponse extends SpeakeasyBase {
    contentType: string;
    savedAdStyle?: shared.SavedAdStyle;
    statusCode: number;
}
