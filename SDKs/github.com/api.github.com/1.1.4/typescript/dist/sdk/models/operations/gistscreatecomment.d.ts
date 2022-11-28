import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsCreateCommentPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsCreateCommentRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class GistsCreateCommentRequest extends SpeakeasyBase {
    pathParams: GistsCreateCommentPathParams;
    request?: GistsCreateCommentRequestBody;
}
export declare class GistsCreateCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gistComment?: shared.GistComment;
}
