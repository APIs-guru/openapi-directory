import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideosIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    id: any;
}
export declare class DeleteVideosIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteVideosIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: DeleteVideosIdCommentsCommentIdPathParams;
    security: DeleteVideosIdCommentsCommentIdSecurity;
}
export declare class DeleteVideosIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
