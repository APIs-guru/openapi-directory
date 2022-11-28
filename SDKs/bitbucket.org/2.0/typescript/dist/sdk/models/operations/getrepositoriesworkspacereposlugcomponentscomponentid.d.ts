import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugComponentsComponentIdPathParams extends SpeakeasyBase {
    componentId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugComponentsComponentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugComponentsComponentIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugComponentsComponentIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    component?: Map<string, any>;
    error?: Map<string, any>;
}
