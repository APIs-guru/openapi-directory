import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateReportTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateReportTaskRequest extends SpeakeasyBase {
    request: shared.CreateReportTask;
    security: CreateReportTaskSecurity;
}
export declare class CreateReportTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
