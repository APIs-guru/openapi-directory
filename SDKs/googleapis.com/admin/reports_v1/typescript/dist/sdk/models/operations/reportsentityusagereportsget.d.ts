import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ReportsEntityUsageReportsGetEntityTypeEnum {
    GplusCommunities = "gplus_communities"
}
export declare class ReportsEntityUsageReportsGetPathParams extends SpeakeasyBase {
    date: string;
    entityKey: string;
    entityType: ReportsEntityUsageReportsGetEntityTypeEnum;
}
export declare class ReportsEntityUsageReportsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    filters?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    parameters?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ReportsEntityUsageReportsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ReportsEntityUsageReportsGetRequest extends SpeakeasyBase {
    pathParams: ReportsEntityUsageReportsGetPathParams;
    queryParams: ReportsEntityUsageReportsGetQueryParams;
    security: ReportsEntityUsageReportsGetSecurity;
}
export declare class ReportsEntityUsageReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usageReports?: shared.UsageReports;
}
