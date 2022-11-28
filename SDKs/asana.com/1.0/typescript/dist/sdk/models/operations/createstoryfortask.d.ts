import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStoryForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class CreateStoryForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateStoryForTaskRequestBodyInput extends SpeakeasyBase {
    data?: shared.StoryRequestInput;
}
export declare class CreateStoryForTask201ApplicationJson extends SpeakeasyBase {
    data?: shared.StoryResponse;
}
export declare class CreateStoryForTaskRequest extends SpeakeasyBase {
    pathParams: CreateStoryForTaskPathParams;
    queryParams: CreateStoryForTaskQueryParams;
    request: CreateStoryForTaskRequestBodyInput;
}
export declare class CreateStoryForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createStoryForTask201ApplicationJsonObject?: CreateStoryForTask201ApplicationJson;
}
