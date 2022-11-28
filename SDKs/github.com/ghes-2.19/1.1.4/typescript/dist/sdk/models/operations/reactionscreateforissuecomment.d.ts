import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForIssueCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsCreateForIssueCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForIssueCommentRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForIssueCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForIssueComment415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsCreateForIssueCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForIssueCommentPathParams;
    request?: ReactionsCreateForIssueCommentRequestBody;
}
export declare class ReactionsCreateForIssueCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
    reactionsCreateForIssueComment415ApplicationJsonObject?: ReactionsCreateForIssueComment415ApplicationJson;
    validationError?: shared.ValidationError;
}
