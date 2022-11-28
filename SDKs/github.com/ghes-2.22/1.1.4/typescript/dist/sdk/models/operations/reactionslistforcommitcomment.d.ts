import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForCommitCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsListForCommitCommentContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsListForCommitCommentQueryParams extends SpeakeasyBase {
    content?: ReactionsListForCommitCommentContentEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForCommitComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsListForCommitCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsListForCommitCommentPathParams;
    queryParams: ReactionsListForCommitCommentQueryParams;
}
export declare class ReactionsListForCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reactions?: shared.Reaction[];
    reactionsListForCommitComment415ApplicationJsonObject?: ReactionsListForCommitComment415ApplicationJson;
}
