import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListCommentsForReviewPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
    reviewId: number;
}
export declare class PullsListCommentsForReviewQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class PullsListCommentsForReviewRequest extends SpeakeasyBase {
    pathParams: PullsListCommentsForReviewPathParams;
    queryParams: PullsListCommentsForReviewQueryParams;
}
export declare class PullsListCommentsForReviewResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reviewComments?: shared.ReviewComment[];
}
