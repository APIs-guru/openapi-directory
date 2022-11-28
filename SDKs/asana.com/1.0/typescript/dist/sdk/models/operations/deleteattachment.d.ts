import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAttachmentPathParams extends SpeakeasyBase {
    attachmentGid: string;
}
export declare class DeleteAttachmentQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteAttachment200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeleteAttachmentRequest extends SpeakeasyBase {
    pathParams: DeleteAttachmentPathParams;
    queryParams: DeleteAttachmentQueryParams;
}
export declare class DeleteAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteAttachment200ApplicationJsonObject?: DeleteAttachment200ApplicationJson;
}
