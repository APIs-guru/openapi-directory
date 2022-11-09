import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsReportsGeneratePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsensehostAccountsReportsGenerateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
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
    userIp?: string;
}
export declare class AdsensehostAccountsReportsGenerateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsReportsGenerateRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsReportsGeneratePathParams;
    queryParams: AdsensehostAccountsReportsGenerateQueryParams;
    security: AdsensehostAccountsReportsGenerateSecurity;
}
export declare class AdsensehostAccountsReportsGenerateResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
