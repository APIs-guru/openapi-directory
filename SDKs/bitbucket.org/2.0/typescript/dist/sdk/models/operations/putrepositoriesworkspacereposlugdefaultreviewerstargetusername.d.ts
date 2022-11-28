import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams extends SpeakeasyBase {
    repoSlug: string;
    targetUsername: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePathParams;
    security: PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
