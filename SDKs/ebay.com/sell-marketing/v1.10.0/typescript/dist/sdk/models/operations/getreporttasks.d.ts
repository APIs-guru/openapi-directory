import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportTasksQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
    reportTaskStatuses?: string;
}
export declare class GetReportTasksSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReportTasksRequest extends SpeakeasyBase {
    queryParams: GetReportTasksQueryParams;
    security: GetReportTasksSecurity;
}
export declare class GetReportTasksResponse extends SpeakeasyBase {
    contentType: string;
    reportTaskPagedCollection?: shared.ReportTaskPagedCollection;
    statusCode: number;
}
