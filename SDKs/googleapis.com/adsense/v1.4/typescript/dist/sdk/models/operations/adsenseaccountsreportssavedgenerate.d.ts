import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsSavedGeneratePathParams extends SpeakeasyBase {
    accountId: string;
    savedReportId: string;
}
export declare class AdsenseAccountsReportsSavedGenerateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    locale?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    userIp?: string;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsSavedGenerateSecurityOption1;
    option2?: AdsenseAccountsReportsSavedGenerateSecurityOption2;
}
export declare class AdsenseAccountsReportsSavedGenerateRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsReportsSavedGeneratePathParams;
    queryParams: AdsenseAccountsReportsSavedGenerateQueryParams;
    security: AdsenseAccountsReportsSavedGenerateSecurity;
}
export declare class AdsenseAccountsReportsSavedGenerateResponse extends SpeakeasyBase {
    adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;
    contentType: string;
    statusCode: number;
}
