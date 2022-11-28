import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchMessageCommentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchMessageCommentsIdRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PatchMessageCommentsIdRequest extends SpeakeasyBase {
    pathParams: PatchMessageCommentsIdPathParams;
    request: PatchMessageCommentsIdRequestBody;
}
export declare class PatchMessageCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    messageCommentEntity?: shared.MessageCommentEntity;
    statusCode: number;
}
