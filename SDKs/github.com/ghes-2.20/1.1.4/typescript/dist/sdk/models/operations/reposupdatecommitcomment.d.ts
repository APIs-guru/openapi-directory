import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateCommitCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class ReposUpdateCommitCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class ReposUpdateCommitCommentRequest extends SpeakeasyBase {
    pathParams: ReposUpdateCommitCommentPathParams;
    request?: ReposUpdateCommitCommentRequestBody;
}
export declare class ReposUpdateCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    commitComment?: shared.CommitComment;
}
