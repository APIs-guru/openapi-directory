import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWorkspacesRoleEnum {
    Owner = "owner",
    Collaborator = "collaborator",
    Member = "member"
}
export declare class GetWorkspacesQueryParams extends SpeakeasyBase {
    q?: string;
    role?: GetWorkspacesRoleEnum;
    sort?: string;
}
export declare class GetWorkspacesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesRequest extends SpeakeasyBase {
    queryParams: GetWorkspacesQueryParams;
    security: GetWorkspacesSecurity;
}
export declare class GetWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWorkspaces?: shared.PaginatedWorkspaces;
}
