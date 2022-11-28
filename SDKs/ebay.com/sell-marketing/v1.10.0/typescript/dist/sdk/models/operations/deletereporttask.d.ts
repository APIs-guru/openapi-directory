import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteReportTaskPathParams extends SpeakeasyBase {
    reportTaskId: string;
}
export declare class DeleteReportTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteReportTaskRequest extends SpeakeasyBase {
    pathParams: DeleteReportTaskPathParams;
    security: DeleteReportTaskSecurity;
}
export declare class DeleteReportTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
