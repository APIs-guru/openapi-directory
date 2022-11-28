import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFollowersForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class AddFollowersForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddFollowersForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskAddFollowersRequest;
}
export declare class AddFollowersForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddFollowersForTaskRequest extends SpeakeasyBase {
    pathParams: AddFollowersForTaskPathParams;
    queryParams: AddFollowersForTaskQueryParams;
    request: AddFollowersForTaskRequestBody;
}
export declare class AddFollowersForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addFollowersForTask200ApplicationJsonObject?: AddFollowersForTask200ApplicationJson;
}
