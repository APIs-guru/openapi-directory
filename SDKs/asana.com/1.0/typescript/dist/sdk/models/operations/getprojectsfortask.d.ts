import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsForTaskPathParams extends SpeakeasyBase {
    taskGid: string;
}
export declare class GetProjectsForTaskQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetProjectsForTask200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectCompact[];
}
export declare class GetProjectsForTaskRequest extends SpeakeasyBase {
    pathParams: GetProjectsForTaskPathParams;
    queryParams: GetProjectsForTaskQueryParams;
}
export declare class GetProjectsForTaskResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjectsForTask200ApplicationJsonObject?: GetProjectsForTask200ApplicationJson;
}
