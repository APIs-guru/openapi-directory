import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams extends SpeakeasyBase {
    repoSlug: string;
    targetUsername: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
