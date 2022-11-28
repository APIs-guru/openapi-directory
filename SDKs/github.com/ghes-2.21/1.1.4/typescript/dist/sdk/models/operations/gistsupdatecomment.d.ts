import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsUpdateCommentPathParams extends SpeakeasyBase {
    commentId: number;
    gistId: string;
}
export declare class GistsUpdateCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class GistsUpdateCommentRequest extends SpeakeasyBase {
    pathParams: GistsUpdateCommentPathParams;
    request?: GistsUpdateCommentRequestBody;
}
export declare class GistsUpdateCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gistComment?: shared.GistComment;
}
