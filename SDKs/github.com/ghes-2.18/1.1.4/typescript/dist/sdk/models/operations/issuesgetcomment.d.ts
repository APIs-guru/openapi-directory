import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesGetCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class IssuesGetCommentRequest extends SpeakeasyBase {
    pathParams: IssuesGetCommentPathParams;
}
export declare class IssuesGetCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    issueComment?: shared.IssueComment;
}
