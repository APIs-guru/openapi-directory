import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseSavedadstylesGetPathParams extends SpeakeasyBase {
    savedAdStyleId: string;
}
export declare class AdsenseSavedadstylesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseSavedadstylesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseSavedadstylesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseSavedadstylesGetSecurity extends SpeakeasyBase {
    option1?: AdsenseSavedadstylesGetSecurityOption1;
    option2?: AdsenseSavedadstylesGetSecurityOption2;
}
export declare class AdsenseSavedadstylesGetRequest extends SpeakeasyBase {
    pathParams: AdsenseSavedadstylesGetPathParams;
    queryParams: AdsenseSavedadstylesGetQueryParams;
    security: AdsenseSavedadstylesGetSecurity;
}
export declare class AdsenseSavedadstylesGetResponse extends SpeakeasyBase {
    contentType: string;
    savedAdStyle?: shared.SavedAdStyle;
    statusCode: number;
}
