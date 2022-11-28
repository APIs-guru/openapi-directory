import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedCommitComments?: shared.PaginatedCommitComments;
}
