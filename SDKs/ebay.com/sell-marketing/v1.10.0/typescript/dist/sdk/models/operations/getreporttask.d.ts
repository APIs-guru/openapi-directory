import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportTaskPathParams extends SpeakeasyBase {
    reportTaskId: string;
}
export declare class GetReportTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReportTaskRequest extends SpeakeasyBase {
    pathParams: GetReportTaskPathParams;
    security: GetReportTaskSecurity;
}
export declare class GetReportTaskResponse extends SpeakeasyBase {
    contentType: string;
    reportTask?: shared.ReportTask;
    statusCode: number;
}
