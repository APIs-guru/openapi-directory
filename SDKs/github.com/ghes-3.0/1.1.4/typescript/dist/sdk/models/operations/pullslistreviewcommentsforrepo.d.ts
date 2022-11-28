import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListReviewCommentsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare enum PullsListReviewCommentsForRepoDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum PullsListReviewCommentsForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    CreatedAt = "created_at"
}
export declare class PullsListReviewCommentsForRepoQueryParams extends SpeakeasyBase {
    direction?: PullsListReviewCommentsForRepoDirectionEnum;
    page?: number;
    perPage?: number;
    since?: Date;
    sort?: PullsListReviewCommentsForRepoSortEnum;
}
export declare class PullsListReviewCommentsForRepoRequest extends SpeakeasyBase {
    pathParams: PullsListReviewCommentsForRepoPathParams;
    queryParams: PullsListReviewCommentsForRepoQueryParams;
}
export declare class PullsListReviewCommentsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    pullRequestReviewComments?: shared.PullRequestReviewComment[];
}
