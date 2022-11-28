import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsDeleteCommentPathParams extends SpeakeasyBase {
    commentId: number;
    gistId: string;
}
export declare class GistsDeleteCommentRequest extends SpeakeasyBase {
    pathParams: GistsDeleteCommentPathParams;
}
export declare class GistsDeleteCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
