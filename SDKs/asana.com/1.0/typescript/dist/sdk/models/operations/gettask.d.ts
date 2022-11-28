import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskResponse;
}
export declare class GetTaskRequest extends SpeakeasyBase {
    pathParams: GetTaskPathParams;
    queryParams: GetTaskQueryParams;
}
export declare class GetTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTask200ApplicationJsonObject?: GetTask200ApplicationJson;
}
