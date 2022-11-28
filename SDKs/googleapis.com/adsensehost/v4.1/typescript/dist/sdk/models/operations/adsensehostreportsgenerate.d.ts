import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensehostReportsGenerateQueryParams extends SpeakeasyBase {
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
export declare class AdsensehostReportsGenerateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostReportsGenerateRequest extends SpeakeasyBase {
    queryParams: AdsensehostReportsGenerateQueryParams;
    security: AdsensehostReportsGenerateSecurity;
}
export declare class AdsensehostReportsGenerateResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
}
