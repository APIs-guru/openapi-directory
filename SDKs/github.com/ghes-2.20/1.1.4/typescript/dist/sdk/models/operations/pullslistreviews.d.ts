import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListReviewsPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsListReviewsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class PullsListReviewsRequest extends SpeakeasyBase {
    pathParams: PullsListReviewsPathParams;
    queryParams: PullsListReviewsQueryParams;
}
export declare class PullsListReviewsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    pullRequestReviews?: shared.PullRequestReview[];
}
