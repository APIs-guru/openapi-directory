import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceMembershipsForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class GetWorkspaceMembershipsForWorkspaceQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    user?: string;
}
export declare class GetWorkspaceMembershipsForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.WorkspaceMembershipCompact[];
}
export declare class GetWorkspaceMembershipsForWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceMembershipsForWorkspacePathParams;
    queryParams: GetWorkspaceMembershipsForWorkspaceQueryParams;
}
export declare class GetWorkspaceMembershipsForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getWorkspaceMembershipsForWorkspace200ApplicationJsonObject?: GetWorkspaceMembershipsForWorkspace200ApplicationJson;
}
