import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFileAsMultipartPathParams extends SpeakeasyBase {
    uploadId: string;
}
export declare class UploadFileAsMultipartHeaders extends SpeakeasyBase {
    contentRange?: string;
    xSdsAuthToken?: string;
}
export declare class UploadFileAsMultipartRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileAsMultipartRequestBody extends SpeakeasyBase {
    file?: UploadFileAsMultipartRequestBodyFile;
}
export declare class UploadFileAsMultipartRequest extends SpeakeasyBase {
    pathParams: UploadFileAsMultipartPathParams;
    headers: UploadFileAsMultipartHeaders;
    request: UploadFileAsMultipartRequestBody;
}
export declare class UploadFileAsMultipartResponse extends SpeakeasyBase {
    chunkUploadResponse?: shared.ChunkUploadResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
