import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTasksForTagPathParams extends SpeakeasyBase {
    tagGid: string;
}
export declare class GetTasksForTagQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTasksForTag200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetTasksForTagRequest extends SpeakeasyBase {
    pathParams: GetTasksForTagPathParams;
    queryParams: GetTasksForTagQueryParams;
}
export declare class GetTasksForTagResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTasksForTag200ApplicationJsonObject?: GetTasksForTag200ApplicationJson;
}
