import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseReportsSavedGeneratePathParams extends SpeakeasyBase {
    savedReportId: string;
}
export declare class AdsenseReportsSavedGenerateQueryParams extends SpeakeasyBase {
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
export declare class AdsenseReportsSavedGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseReportsSavedGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseReportsSavedGenerateSecurity extends SpeakeasyBase {
    option1?: AdsenseReportsSavedGenerateSecurityOption1;
    option2?: AdsenseReportsSavedGenerateSecurityOption2;
}
export declare class AdsenseReportsSavedGenerateRequest extends SpeakeasyBase {
    pathParams: AdsenseReportsSavedGeneratePathParams;
    queryParams: AdsenseReportsSavedGenerateQueryParams;
    security: AdsenseReportsSavedGenerateSecurity;
}
export declare class AdsenseReportsSavedGenerateResponse extends SpeakeasyBase {
    adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;
    contentType: string;
    statusCode: number;
}
