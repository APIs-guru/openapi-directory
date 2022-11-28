import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubtasksForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetSubtasksForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetSubtasksForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetSubtasksForTaskRequest extends SpeakeasyBase {
    pathParams: GetSubtasksForTaskPathParams;
    queryParams: GetSubtasksForTaskQueryParams;
}
export declare class GetSubtasksForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getSubtasksForTask200ApplicationJsonObject?: GetSubtasksForTask200ApplicationJson;
}
