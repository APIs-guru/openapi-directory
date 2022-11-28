import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportsUserUsageReportGetPathParams extends SpeakeasyBase {
    date: string;
    userKey: string;
}
export declare class ReportsUserUsageReportGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    filters?: string;
    groupIdFilter?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orgUnitId?: string;
    pageToken?: string;
    parameters?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ReportsUserUsageReportGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReportsUserUsageReportGetRequest extends SpeakeasyBase {
    pathParams: ReportsUserUsageReportGetPathParams;
    queryParams: ReportsUserUsageReportGetQueryParams;
    security: ReportsUserUsageReportGetSecurity;
}
export declare class ReportsUserUsageReportGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usageReports?: shared.UsageReports;
}
