import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDependenciesForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetDependenciesForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetDependenciesForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetDependenciesForTaskRequest extends SpeakeasyBase {
    pathParams: GetDependenciesForTaskPathParams;
    queryParams: GetDependenciesForTaskQueryParams;
}
export declare class GetDependenciesForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getDependenciesForTask200ApplicationJsonObject?: GetDependenciesForTask200ApplicationJson;
}
