import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveDependenciesForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class RemoveDependenciesForTaskQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveDependenciesForTaskRequestBody extends SpeakeasyBase {
    data?: shared.ModifyDependenciesRequest;
}
export declare class RemoveDependenciesForTask200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>[];
}
export declare class RemoveDependenciesForTaskRequest extends SpeakeasyBase {
    pathParams: RemoveDependenciesForTaskPathParams;
    queryParams: RemoveDependenciesForTaskQueryParams;
    request: RemoveDependenciesForTaskRequestBody;
}
export declare class RemoveDependenciesForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeDependenciesForTask200ApplicationJsonObject?: RemoveDependenciesForTask200ApplicationJson;
}
