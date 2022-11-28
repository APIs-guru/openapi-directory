import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSubtaskForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class CreateSubtaskForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateSubtaskForTaskRequestBodyInput extends SpeakeasyBase {
    data?: shared.TaskRequestInput;
}
export declare class CreateSubtaskForTask201ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskResponse;
}
export declare class CreateSubtaskForTaskRequest extends SpeakeasyBase {
    pathParams: CreateSubtaskForTaskPathParams;
    queryParams: CreateSubtaskForTaskQueryParams;
    request: CreateSubtaskForTaskRequestBodyInput;
}
export declare class CreateSubtaskForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createSubtaskForTask201ApplicationJsonObject?: CreateSubtaskForTask201ApplicationJson;
}
