import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForIssuePathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare enum ReactionsCreateForIssueRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForIssueRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForIssueRequestBodyContentEnum;
}
export declare class ReactionsCreateForIssue415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsCreateForIssueRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForIssuePathParams;
    request?: ReactionsCreateForIssueRequestBody;
}
export declare class ReactionsCreateForIssueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
    reactionsCreateForIssue415ApplicationJsonObject?: ReactionsCreateForIssue415ApplicationJson;
    validationError?: shared.ValidationError;
}
