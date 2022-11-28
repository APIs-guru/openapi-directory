import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForIssueCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsListForIssueCommentContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForIssueCommentQueryParams extends SpeakeasyBase {
    content?: ReactionsListForIssueCommentContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForIssueComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsListForIssueCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsListForIssueCommentPathParams;
    queryParams: ReactionsListForIssueCommentQueryParams;
}
export declare class ReactionsListForIssueCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reactions?: shared.Reaction[];
    reactionsListForIssueComment415ApplicationJsonObject?: ReactionsListForIssueComment415ApplicationJson;
}
