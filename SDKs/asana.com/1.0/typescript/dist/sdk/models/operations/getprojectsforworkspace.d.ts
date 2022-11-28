import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class GetProjectsForWorkspaceQueryParams extends SpeakeasyBase {
    archived?: boolean;
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetProjectsForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.ProjectCompact[];
}
export declare class GetProjectsForWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetProjectsForWorkspacePathParams;
    queryParams: GetProjectsForWorkspaceQueryParams;
}
export declare class GetProjectsForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getProjectsForWorkspace200ApplicationJsonObject?: GetProjectsForWorkspace200ApplicationJson;
}
