import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams extends SpeakeasyBase {
    repoSlug: string;
    targetUsername: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams;
    security: GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
