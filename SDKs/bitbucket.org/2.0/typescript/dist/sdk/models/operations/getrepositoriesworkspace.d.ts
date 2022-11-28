import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspacePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare enum GetRepositoriesWorkspaceRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member",
    Owner = "owner"
}
export declare class GetRepositoriesWorkspaceQueryParams extends SpeakeasyBase {
    q?: string;
    role?: GetRepositoriesWorkspaceRoleEnum;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspacePathParams;
    queryParams: GetRepositoriesWorkspaceQueryParams;
    security: GetRepositoriesWorkspaceSecurity;
}
export declare class GetRepositoriesWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedRepositories?: shared.PaginatedRepositories;
}
