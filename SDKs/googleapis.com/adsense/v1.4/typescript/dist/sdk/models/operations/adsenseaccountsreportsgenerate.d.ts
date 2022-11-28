import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsReportsGeneratePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsenseAccountsReportsGenerateQueryParams extends SpeakeasyBase {
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
export declare class AdsenseAccountsReportsGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsReportsGenerateSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsGenerateSecurityOption1;
    option2?: AdsenseAccountsReportsGenerateSecurityOption2;
}
export declare class AdsenseAccountsReportsGenerateRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsReportsGeneratePathParams;
    queryParams: AdsenseAccountsReportsGenerateQueryParams;
    security: AdsenseAccountsReportsGenerateSecurity;
}
export declare class AdsenseAccountsReportsGenerateResponse extends SpeakeasyBase {
    adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;
    contentType: string;
    statusCode: number;
}
