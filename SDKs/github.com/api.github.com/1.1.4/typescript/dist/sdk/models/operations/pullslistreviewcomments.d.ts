import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListReviewCommentsPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare enum PullsListReviewCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PullsListReviewCommentsQueryParams extends SpeakeasyBase {
    direction?: PullsListReviewCommentsDirectionEnum;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: shared.SortEnum;
}
export declare class PullsListReviewCommentsRequest extends SpeakeasyBase {
    pathParams: PullsListReviewCommentsPathParams;
    queryParams: PullsListReviewCommentsQueryParams;
}
export declare class PullsListReviewCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    pullRequestReviewComments?: shared.PullRequestReviewComment[];
}
