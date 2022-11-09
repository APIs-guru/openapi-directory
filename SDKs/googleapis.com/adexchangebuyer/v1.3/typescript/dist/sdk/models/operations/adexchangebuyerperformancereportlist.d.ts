import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPerformanceReportListQueryParams extends SpeakeasyBase {
    accountId: string;
    alt?: shared.AltEnum;
    endDateTime: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDateTime: string;
    userIp?: string;
}
export declare class AdexchangebuyerPerformanceReportListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPerformanceReportListRequest extends SpeakeasyBase {
    queryParams: AdexchangebuyerPerformanceReportListQueryParams;
    security: AdexchangebuyerPerformanceReportListSecurity;
}
export declare class AdexchangebuyerPerformanceReportListResponse extends SpeakeasyBase {
    contentType: string;
    performanceReportList?: shared.PerformanceReportList;
    statusCode: number;
}
