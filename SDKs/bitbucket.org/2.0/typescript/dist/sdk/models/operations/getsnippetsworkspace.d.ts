import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspacePathParams extends SpeakeasyBase {
    workspace: string;
}
export declare enum GetSnippetsWorkspaceRoleEnum {
    Owner = "owner",
    Contributor = "contributor",
    Member = "member"
}
export declare class GetSnippetsWorkspaceQueryParams extends SpeakeasyBase {
    role?: GetSnippetsWorkspaceRoleEnum;
}
export declare class GetSnippetsWorkspaceSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspacePathParams;
    queryParams: GetSnippetsWorkspaceQueryParams;
    security: GetSnippetsWorkspaceSecurity;
}
export declare class GetSnippetsWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedSnippets?: shared.PaginatedSnippets;
}
