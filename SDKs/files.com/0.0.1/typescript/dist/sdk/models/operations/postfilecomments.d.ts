import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFileCommentsRequestBody extends SpeakeasyBase {
    body: string;
    path: string;
}
export declare class PostFileCommentsRequest extends SpeakeasyBase {
    request: PostFileCommentsRequestBody;
}
export declare class PostFileCommentsResponse extends SpeakeasyBase {
    contentType: string;
    fileCommentEntity?: shared.FileCommentEntity;
    statusCode: number;
}
