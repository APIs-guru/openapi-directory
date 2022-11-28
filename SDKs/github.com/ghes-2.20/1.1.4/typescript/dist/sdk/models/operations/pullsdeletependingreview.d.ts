import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsDeletePendingReviewPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
    reviewId: number;
}
export declare class PullsDeletePendingReviewRequest extends SpeakeasyBase {
    pathParams: PullsDeletePendingReviewPathParams;
}
export declare class PullsDeletePendingReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReview?: shared.PullRequestReview;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
