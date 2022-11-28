import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFileByTokenAsBinary1PathParams extends SpeakeasyBase {
    token: string;
}
export declare class UploadFileByTokenAsBinary1Headers extends SpeakeasyBase {
    contentRange?: string;
}
export declare class UploadFileByTokenAsBinary1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileByTokenAsBinary1RequestBody extends SpeakeasyBase {
    file?: UploadFileByTokenAsBinary1RequestBodyFile;
}
export declare class UploadFileByTokenAsBinary1Request extends SpeakeasyBase {
    pathParams: UploadFileByTokenAsBinary1PathParams;
    headers: UploadFileByTokenAsBinary1Headers;
    request: UploadFileByTokenAsBinary1RequestBody;
}
export declare class UploadFileByTokenAsBinary1Response extends SpeakeasyBase {
    chunkUploadResponse?: shared.ChunkUploadResponse;
    contentType: string;
    statusCode: number;
    uploadFileByTokenAsBinary1400ApplicationJsonOneOf?: any;
    uploadFileByTokenAsBinary1401ApplicationJsonOneOf?: any;
    uploadFileByTokenAsBinary1403ApplicationJsonOneOf?: any;
    uploadFileByTokenAsBinary1404ApplicationJsonOneOf?: any;
    uploadFileByTokenAsBinary1406ApplicationJsonOneOf?: any;
    uploadFileByTokenAsBinary1507ApplicationJsonOneOf?: any;
}
