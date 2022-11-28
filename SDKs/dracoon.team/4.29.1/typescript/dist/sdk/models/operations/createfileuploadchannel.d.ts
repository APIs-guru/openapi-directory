import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFileUploadChannelHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class CreateFileUploadChannelRequest extends SpeakeasyBase {
    headers: CreateFileUploadChannelHeaders;
    request: shared.CreateFileUploadRequest;
}
export declare class CreateFileUploadChannelResponse extends SpeakeasyBase {
    contentType: string;
    createFileUploadResponse?: shared.CreateFileUploadResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
