import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttachmentPathParams extends SpeakeasyBase {
    attachmentGid: string;
}
export declare class GetAttachmentQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetAttachment200ApplicationJson extends SpeakeasyBase {
    data?: shared.AttachmentResponse;
}
export declare class GetAttachmentRequest extends SpeakeasyBase {
    pathParams: GetAttachmentPathParams;
    queryParams: GetAttachmentQueryParams;
}
export declare class GetAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getAttachment200ApplicationJsonObject?: GetAttachment200ApplicationJson;
}
