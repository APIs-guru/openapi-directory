import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class UpdateTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateTaskRequestBodyInput extends SpeakeasyBase {
    data?: shared.TaskRequestInput;
}
export declare class UpdateTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskResponse;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    pathParams: UpdateTaskPathParams;
    queryParams: UpdateTaskQueryParams;
    request: UpdateTaskRequestBodyInput;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateTask200ApplicationJsonObject?: UpdateTask200ApplicationJson;
}
