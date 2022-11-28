import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaskCountsForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class GetTaskCountsForProjectQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetTaskCountsForProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCountResponse;
}
export declare class GetTaskCountsForProjectRequest extends SpeakeasyBase {
    pathParams: GetTaskCountsForProjectPathParams;
    queryParams: GetTaskCountsForProjectQueryParams;
}
export declare class GetTaskCountsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getTaskCountsForProject200ApplicationJsonObject?: GetTaskCountsForProject200ApplicationJson;
}
