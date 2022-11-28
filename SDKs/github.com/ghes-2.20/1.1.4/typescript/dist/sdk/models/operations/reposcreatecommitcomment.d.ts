import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateCommitCommentPathParams extends SpeakeasyBase {
    commitSha: string;
    owner: string;
    repo: string;
}
export declare class ReposCreateCommitCommentRequestBody extends SpeakeasyBase {
    body: string;
    line?: number;
    path?: string;
    position?: number;
}
export declare class ReposCreateCommitCommentRequest extends SpeakeasyBase {
    pathParams: ReposCreateCommitCommentPathParams;
    request?: ReposCreateCommitCommentRequestBody;
}
export declare class ReposCreateCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    commitComment?: shared.CommitComment;
    validationError?: shared.ValidationError;
}
