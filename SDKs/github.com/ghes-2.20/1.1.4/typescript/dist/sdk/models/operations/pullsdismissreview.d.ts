import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsDismissReviewPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
    reviewId: number;
}
export declare class PullsDismissReviewRequestBody extends SpeakeasyBase {
    event?: string;
    message: string;
}
export declare class PullsDismissReviewRequest extends SpeakeasyBase {
    pathParams: PullsDismissReviewPathParams;
    request?: PullsDismissReviewRequestBody;
}
export declare class PullsDismissReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    pullRequestReview?: shared.PullRequestReview;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
