import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDependentsForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetDependentsForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetDependentsForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetDependentsForTaskRequest extends SpeakeasyBase {
    pathParams: GetDependentsForTaskPathParams;
    queryParams: GetDependentsForTaskQueryParams;
}
export declare class GetDependentsForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getDependentsForTask200ApplicationJsonObject?: GetDependentsForTask200ApplicationJson;
}
