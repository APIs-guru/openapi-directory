import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsUpdateReviewCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class PullsUpdateReviewCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PullsUpdateReviewCommentRequest extends SpeakeasyBase {
    pathParams: PullsUpdateReviewCommentPathParams;
    request?: PullsUpdateReviewCommentRequestBody;
}
export declare class PullsUpdateReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pullRequestReviewComment?: shared.PullRequestReviewComment;
}
