import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFileAsMultipartPublic1PathParams extends SpeakeasyBase {
    accessKey: string;
    uploadId: string;
}
export declare class UploadFileAsMultipartPublic1Headers extends SpeakeasyBase {
    contentRange?: string;
    xSdsDateFormat?: any;
}
export declare class UploadFileAsMultipartPublic1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileAsMultipartPublic1RequestBody extends SpeakeasyBase {
    file?: UploadFileAsMultipartPublic1RequestBodyFile;
}
export declare class UploadFileAsMultipartPublic1Request extends SpeakeasyBase {
    pathParams: UploadFileAsMultipartPublic1PathParams;
    headers: UploadFileAsMultipartPublic1Headers;
    request?: UploadFileAsMultipartPublic1RequestBody;
}
export declare class UploadFileAsMultipartPublic1Response extends SpeakeasyBase {
    chunkUploadResponse?: shared.ChunkUploadResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
