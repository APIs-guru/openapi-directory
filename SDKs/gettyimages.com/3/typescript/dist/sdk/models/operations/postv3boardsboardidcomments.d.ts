import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostV3BoardsBoardIdCommentsPathParams extends SpeakeasyBase {
    boardId: string;
}
export declare class PostV3BoardsBoardIdCommentsRequest extends SpeakeasyBase {
    pathParams: PostV3BoardsBoardIdCommentsPathParams;
    request?: shared.CommentRequest;
}
export declare class PostV3BoardsBoardIdCommentsResponse extends SpeakeasyBase {
    commentCreated?: shared.CommentCreated;
    contentType: string;
    statusCode: number;
}
