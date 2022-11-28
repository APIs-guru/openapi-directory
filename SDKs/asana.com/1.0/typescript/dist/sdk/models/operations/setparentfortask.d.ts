import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetParentForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class SetParentForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class SetParentForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskSetParentRequest;
}
export declare class SetParentForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskResponse;
}
export declare class SetParentForTaskRequest extends SpeakeasyBase {
    pathParams: SetParentForTaskPathParams;
    queryParams: SetParentForTaskQueryParams;
    request: SetParentForTaskRequestBody;
}
export declare class SetParentForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    setParentForTask200ApplicationJsonObject?: SetParentForTask200ApplicationJson;
}
