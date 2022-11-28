import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsUpdateReviewPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
    reviewId: number;
}
export declare class PullsUpdateReviewRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PullsUpdateReviewRequest extends SpeakeasyBase {
    pathParams: PullsUpdateReviewPathParams;
    request?: PullsUpdateReviewRequestBody;
}
export declare class PullsUpdateReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pullRequestReview?: shared.PullRequestReview;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
