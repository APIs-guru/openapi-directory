import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceProjectsPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetWorkspacesWorkspaceProjectsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspaceProjectsRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceProjectsPathParams;
    security: GetWorkspacesWorkspaceProjectsSecurity;
}
export declare class GetWorkspacesWorkspaceProjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedProjects?: shared.PaginatedProjects;
}
