import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTasksQueryParams extends SpeakeasyBase {
    assignee?: string;
    completedSince?: Date;
    limit?: number;
    modifiedSince?: Date;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    project?: string;
    section?: string;
    workspace?: string;
}
export declare class GetTasks200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetTasksRequest extends SpeakeasyBase {
    queryParams: GetTasksQueryParams;
}
export declare class GetTasksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTasks200ApplicationJsonObject?: GetTasks200ApplicationJson;
}
