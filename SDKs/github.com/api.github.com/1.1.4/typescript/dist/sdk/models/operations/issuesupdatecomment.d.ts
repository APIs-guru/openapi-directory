import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesUpdateCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class IssuesUpdateCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class IssuesUpdateCommentRequest extends SpeakeasyBase {
    pathParams: IssuesUpdateCommentPathParams;
    request?: IssuesUpdateCommentRequestBody;
}
export declare class IssuesUpdateCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    issueComment?: shared.IssueComment;
    validationError?: shared.ValidationError;
}
