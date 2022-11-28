import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsNamePathParams extends SpeakeasyBase {
    name: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugRefsTagsNamePathParams;
    security: GetRepositoriesWorkspaceRepoSlugRefsTagsNameSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    tag?: Map<string, any>;
}
