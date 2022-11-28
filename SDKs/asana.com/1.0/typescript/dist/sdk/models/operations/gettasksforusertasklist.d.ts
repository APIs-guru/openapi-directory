import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTasksForUserTaskListPathParams extends SpeakeasyBase {
    userTaskListGid: string;
}
export declare class GetTasksForUserTaskListQueryParams extends SpeakeasyBase {
    completedSince?: string;
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTasksForUserTaskList200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetTasksForUserTaskListRequest extends SpeakeasyBase {
    pathParams: GetTasksForUserTaskListPathParams;
    queryParams: GetTasksForUserTaskListQueryParams;
}
export declare class GetTasksForUserTaskListResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTasksForUserTaskList200ApplicationJsonObject?: GetTasksForUserTaskList200ApplicationJson;
}
