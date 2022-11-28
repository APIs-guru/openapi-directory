import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsSubmitReviewPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
    reviewId: number;
}
export declare enum PullsSubmitReviewRequestBodyEventEnum {
    Approve = "APPROVE",
    RequestChanges = "REQUEST_CHANGES",
    Comment = "COMMENT"
}
export declare class PullsSubmitReviewRequestBody extends SpeakeasyBase {
    body?: string;
    event: PullsSubmitReviewRequestBodyEventEnum;
}
export declare class PullsSubmitReviewRequest extends SpeakeasyBase {
    pathParams: PullsSubmitReviewPathParams;
    request?: PullsSubmitReviewRequestBody;
}
export declare class PullsSubmitReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReview?: shared.PullRequestReview;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
