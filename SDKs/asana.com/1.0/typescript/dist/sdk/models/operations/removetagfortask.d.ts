import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveTagForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class RemoveTagForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveTagForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskRemoveTagRequest;
}
export declare class RemoveTagForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveTagForTaskRequest extends SpeakeasyBase {
    pathParams: RemoveTagForTaskPathParams;
    queryParams: RemoveTagForTaskQueryParams;
    request: RemoveTagForTaskRequestBody;
}
export declare class RemoveTagForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeTagForTask200ApplicationJsonObject?: RemoveTagForTask200ApplicationJson;
}
