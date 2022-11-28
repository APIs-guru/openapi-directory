import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveProjectForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class RemoveProjectForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveProjectForTaskRequestBody extends SpeakeasyBase {
    data?: shared.TaskRemoveProjectRequest;
}
export declare class RemoveProjectForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveProjectForTaskRequest extends SpeakeasyBase {
    pathParams: RemoveProjectForTaskPathParams;
    queryParams: RemoveProjectForTaskQueryParams;
    request: RemoveProjectForTaskRequestBody;
}
export declare class RemoveProjectForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeProjectForTask200ApplicationJsonObject?: RemoveProjectForTask200ApplicationJson;
}
