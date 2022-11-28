import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDefaultReviewersPathParams;
    security: GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
