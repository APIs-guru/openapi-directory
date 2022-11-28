import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeleteCommitCommentPathParams extends SpeakeasyBase {
    commentId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteCommitCommentRequest extends SpeakeasyBase {
    pathParams: ReposDeleteCommitCommentPathParams;
}
export declare class ReposDeleteCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
