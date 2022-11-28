import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTagForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class AddTagForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddTagForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskAddTagRequest;
}
export declare class AddTagForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddTagForTaskRequest extends SpeakeasyBase {
    pathParams: AddTagForTaskPathParams;
    queryParams: AddTagForTaskQueryParams;
    request: AddTagForTaskRequestBody;
}
export declare class AddTagForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addTagForTask200ApplicationJsonObject?: AddTagForTask200ApplicationJson;
}
