import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseSavedadstylesListQueryParams extends SpeakeasyBase {
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
export declare class AdsenseSavedadstylesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseSavedadstylesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseSavedadstylesListSecurity extends SpeakeasyBase {
    option1?: AdsenseSavedadstylesListSecurityOption1;
    option2?: AdsenseSavedadstylesListSecurityOption2;
}
export declare class AdsenseSavedadstylesListRequest extends SpeakeasyBase {
    queryParams: AdsenseSavedadstylesListQueryParams;
    security: AdsenseSavedadstylesListSecurity;
}
export declare class AdsenseSavedadstylesListResponse extends SpeakeasyBase {
    contentType: string;
    savedAdStyles?: shared.SavedAdStyles;
    statusCode: number;
}
