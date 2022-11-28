import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsGetSavedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AdsenseAccountsReportsGetSavedQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsReportsGetSavedSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsGetSavedSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsGetSavedSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsGetSavedSecurityOption1;
    option2?: AdsenseAccountsReportsGetSavedSecurityOption2;
}
export declare class AdsenseAccountsReportsGetSavedRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsReportsGetSavedPathParams;
    queryParams: AdsenseAccountsReportsGetSavedQueryParams;
    security: AdsenseAccountsReportsGetSavedSecurity;
}
export declare class AdsenseAccountsReportsGetSavedResponse extends SpeakeasyBase {
    contentType: string;
    savedReport?: shared.SavedReport;
    statusCode: number;
}
