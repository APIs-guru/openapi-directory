import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateTaskRequestBodyInput extends SpeakeasyBase {
    data?: shared.TaskRequestInput;
}
export declare class CreateTask201ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskResponse;
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    queryParams: CreateTaskQueryParams;
    request: CreateTaskRequestBodyInput;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createTask201ApplicationJsonObject?: CreateTask201ApplicationJson;
}
