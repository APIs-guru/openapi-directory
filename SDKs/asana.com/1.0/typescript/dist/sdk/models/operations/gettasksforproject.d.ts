import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTasksForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class GetTasksForProjectQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTasksForProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetTasksForProjectRequest extends SpeakeasyBase {
    pathParams: GetTasksForProjectPathParams;
    queryParams: GetTasksForProjectQueryParams;
}
export declare class GetTasksForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTasksForProject200ApplicationJsonObject?: GetTasksForProject200ApplicationJson;
}
