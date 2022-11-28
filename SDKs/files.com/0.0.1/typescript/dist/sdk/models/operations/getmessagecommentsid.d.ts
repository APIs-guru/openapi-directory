import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessageCommentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetMessageCommentsIdRequest extends SpeakeasyBase {
    pathParams: GetMessageCommentsIdPathParams;
}
export declare class GetMessageCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    messageCommentEntity?: shared.MessageCommentEntity;
    statusCode: number;
}
