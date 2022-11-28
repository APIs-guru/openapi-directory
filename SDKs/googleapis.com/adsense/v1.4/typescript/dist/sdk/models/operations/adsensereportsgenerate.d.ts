import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseReportsGenerateQueryParams extends SpeakeasyBase {
    accountId?: string[];
    alt?: shared.AltEnum;
    currency?: string;
    dimension?: string[];
    endDate: string;
    fields?: string;
    filter?: string[];
    key?: string;
    locale?: string;
    maxResults?: number;
    metric?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sort?: string[];
    startDate: string;
    startIndex?: number;
    useTimezoneReporting?: boolean;
    userIp?: string;
}
export declare class AdsenseReportsGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseReportsGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseReportsGenerateSecurity extends SpeakeasyBase {
    option1?: AdsenseReportsGenerateSecurityOption1;
    option2?: AdsenseReportsGenerateSecurityOption2;
}
export declare class AdsenseReportsGenerateRequest extends SpeakeasyBase {
    queryParams: AdsenseReportsGenerateQueryParams;
    security: AdsenseReportsGenerateSecurity;
}
export declare class AdsenseReportsGenerateResponse extends SpeakeasyBase {
    adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;
    contentType: string;
    statusCode: number;
}
