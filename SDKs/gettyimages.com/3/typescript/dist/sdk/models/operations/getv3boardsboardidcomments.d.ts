import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3BoardsBoardIdCommentsPathParams extends SpeakeasyBase {
    boardId: string;
}
export declare class GetV3BoardsBoardIdCommentsRequest extends SpeakeasyBase {
    pathParams: GetV3BoardsBoardIdCommentsPathParams;
}
export declare class GetV3BoardsBoardIdCommentsResponse extends SpeakeasyBase {
    commentsList?: shared.CommentsList;
    contentType: string;
    statusCode: number;
}
