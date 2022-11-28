import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectStatusesForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class GetProjectStatusesForProjectQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetProjectStatusesForProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectStatusCompact[];
}
export declare class GetProjectStatusesForProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectStatusesForProjectPathParams;
    queryParams: GetProjectStatusesForProjectQueryParams;
}
export declare class GetProjectStatusesForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjectStatusesForProject200ApplicationJsonObject?: GetProjectStatusesForProject200ApplicationJson;
}
