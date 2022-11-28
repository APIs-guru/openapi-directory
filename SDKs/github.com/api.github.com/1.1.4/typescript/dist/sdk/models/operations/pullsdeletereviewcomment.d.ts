import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsDeleteReviewCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class PullsDeleteReviewCommentRequest extends SpeakeasyBase {
    pathParams: PullsDeleteReviewCommentPathParams;
}
export declare class PullsDeleteReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
