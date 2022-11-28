import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportingDatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    maxCreateDate?: Date;
    maxDueDate?: Date;
    maxUpdateDate?: Date;
    minCreateDate?: Date;
    minDueDate?: Date;
    minUpdateDate?: Date;
    page?: number;
    perPage?: number;
    reportType?: string[];
    reportYear?: number[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetReportingDatesDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: shared.ReportDate[];
}
export declare class GetReportingDatesRequest extends SpeakeasyBase {
    queryParams: GetReportingDatesQueryParams;
}
export declare class GetReportingDatesResponse extends SpeakeasyBase {
    contentType: string;
    getReportingDatesDefaultApplicationJsonObject?: GetReportingDatesDefaultApplicationJson;
    statusCode: number;
}
