import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchFileCommentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchFileCommentsIdRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PatchFileCommentsIdRequest extends SpeakeasyBase {
    pathParams: PatchFileCommentsIdPathParams;
    request: PatchFileCommentsIdRequestBody;
}
export declare class PatchFileCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    fileCommentEntity?: shared.FileCommentEntity;
    statusCode: number;
}
