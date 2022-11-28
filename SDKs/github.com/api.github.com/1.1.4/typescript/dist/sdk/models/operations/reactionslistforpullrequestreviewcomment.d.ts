import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForPullRequestReviewCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsListForPullRequestReviewCommentContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForPullRequestReviewCommentQueryParams extends SpeakeasyBase {
    content?: ReactionsListForPullRequestReviewCommentContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForPullRequestReviewComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsListForPullRequestReviewCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsListForPullRequestReviewCommentPathParams;
    queryParams: ReactionsListForPullRequestReviewCommentQueryParams;
}
export declare class ReactionsListForPullRequestReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reactions?: shared.Reaction[];
    reactionsListForPullRequestReviewComment415ApplicationJsonObject?: ReactionsListForPullRequestReviewComment415ApplicationJson;
}
