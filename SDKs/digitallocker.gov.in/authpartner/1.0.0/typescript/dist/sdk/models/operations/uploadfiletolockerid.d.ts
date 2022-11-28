import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFileToLockerIdHeaders extends SpeakeasyBase {
    hmac?: string;
    path?: string;
}
export declare class UploadFileToLockerIdRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    imageJpeg: Uint8Array;
    imageJpg: Uint8Array;
    imagePdf: Uint8Array;
    imagePng: Uint8Array;
}
export declare class UploadFileToLockerIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UploadFileToLockerId400ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class UploadFileToLockerId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class UploadFileToLockerId500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class UploadFileToLockerIdRequest extends SpeakeasyBase {
    headers: UploadFileToLockerIdHeaders;
    request?: UploadFileToLockerIdRequests;
    security: UploadFileToLockerIdSecurity;
}
export declare class UploadFileToLockerIdResponse extends SpeakeasyBase {
    contentType: string;
    fileUploadResponse?: any;
    statusCode: number;
    uploadFileToLockerId400ApplicationJsonObject?: UploadFileToLockerId400ApplicationJson;
    uploadFileToLockerId401ApplicationJsonObject?: UploadFileToLockerId401ApplicationJson;
    uploadFileToLockerId500ApplicationJsonObject?: UploadFileToLockerId500ApplicationJson;
}
