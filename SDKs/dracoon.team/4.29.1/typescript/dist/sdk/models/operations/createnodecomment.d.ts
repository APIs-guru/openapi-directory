import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNodeCommentPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class CreateNodeCommentHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CreateNodeCommentRequest extends SpeakeasyBase {
    pathParams: CreateNodeCommentPathParams;
    headers: CreateNodeCommentHeaders;
    request: shared.CreateNodeCommentRequest;
}
export declare class CreateNodeCommentResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
