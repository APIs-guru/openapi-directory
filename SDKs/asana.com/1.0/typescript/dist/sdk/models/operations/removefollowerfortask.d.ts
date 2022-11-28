import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveFollowerForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class RemoveFollowerForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveFollowerForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskRemoveFollowersRequest;
}
export declare class RemoveFollowerForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveFollowerForTaskRequest extends SpeakeasyBase {
    pathParams: RemoveFollowerForTaskPathParams;
    queryParams: RemoveFollowerForTaskQueryParams;
    request: RemoveFollowerForTaskRequestBody;
}
export declare class RemoveFollowerForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeFollowerForTask200ApplicationJsonObject?: RemoveFollowerForTask200ApplicationJson;
}
