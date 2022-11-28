import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForPullRequestReviewCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForPullRequestReviewCommentRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForPullRequestReviewComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsCreateForPullRequestReviewCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForPullRequestReviewCommentPathParams;
    request?: ReactionsCreateForPullRequestReviewCommentRequestBody;
}
export declare class ReactionsCreateForPullRequestReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
    reactionsCreateForPullRequestReviewComment415ApplicationJsonObject?: ReactionsCreateForPullRequestReviewComment415ApplicationJson;
    validationError?: shared.ValidationError;
}
