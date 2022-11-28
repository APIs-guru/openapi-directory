import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTasksQueryParams extends SpeakeasyBase {
    dateRange?: string;
    feedType?: string;
    limit?: string;
    lookBackDays?: string;
    offset?: string;
    scheduleId?: string;
}
export declare class GetTasksSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetTasksRequest extends SpeakeasyBase {
    queryParams: GetTasksQueryParams;
    security: GetTasksSecurity;
}
export declare class GetTasksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskCollection?: shared.TaskCollection;
}
