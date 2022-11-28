import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForCommitCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsCreateForCommitCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForCommitCommentRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForCommitCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForCommitComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsCreateForCommitCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForCommitCommentPathParams;
    request?: ReactionsCreateForCommitCommentRequestBody;
}
export declare class ReactionsCreateForCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
    reactionsCreateForCommitComment415ApplicationJsonObject?: ReactionsCreateForCommitComment415ApplicationJson;
    validationError?: shared.ValidationError;
}
