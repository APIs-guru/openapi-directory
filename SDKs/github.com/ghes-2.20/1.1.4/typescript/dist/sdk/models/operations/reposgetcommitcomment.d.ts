import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetCommitCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetCommitCommentRequest extends SpeakeasyBase {
    pathParams: ReposGetCommitCommentPathParams;
}
export declare class ReposGetCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    commitComment?: shared.CommitComment;
}
