import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesCreateCommentPathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesCreateCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class IssuesCreateCommentRequest extends SpeakeasyBase {
    pathParams: IssuesCreateCommentPathParams;
    request?: IssuesCreateCommentRequestBody;
}
export declare class IssuesCreateCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    issueComment?: shared.IssueComment;
    validationError?: shared.ValidationError;
}
