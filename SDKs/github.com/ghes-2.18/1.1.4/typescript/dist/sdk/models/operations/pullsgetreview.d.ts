import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsGetReviewPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
    reviewId: number;
}
export declare class PullsGetReviewRequest extends SpeakeasyBase {
    pathParams: PullsGetReviewPathParams;
}
export declare class PullsGetReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReview?: shared.PullRequestReview;
}
