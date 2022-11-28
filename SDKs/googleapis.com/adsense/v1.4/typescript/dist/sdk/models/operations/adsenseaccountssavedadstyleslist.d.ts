import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsSavedadstylesListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsenseAccountsSavedadstylesListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsSavedadstylesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSavedadstylesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsSavedadstylesListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsSavedadstylesListSecurityOption1;
    option2?: AdsenseAccountsSavedadstylesListSecurityOption2;
}
export declare class AdsenseAccountsSavedadstylesListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsSavedadstylesListPathParams;
    queryParams: AdsenseAccountsSavedadstylesListQueryParams;
    security: AdsenseAccountsSavedadstylesListSecurity;
}
export declare class AdsenseAccountsSavedadstylesListResponse extends SpeakeasyBase {
    contentType: string;
    savedAdStyles?: shared.SavedAdStyles;
    statusCode: number;
}
