import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImageOcrPhotoRecognizeReceiptHeaders extends SpeakeasyBase {
    language?: string;
    preprocessing?: string;
    recognitionMode?: string;
}
export declare class ImageOcrPhotoRecognizeReceiptRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPhotoRecognizeReceiptRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
}
export declare class ImageOcrPhotoRecognizeReceiptSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrPhotoRecognizeReceiptRequest extends SpeakeasyBase {
    headers: ImageOcrPhotoRecognizeReceiptHeaders;
    request: ImageOcrPhotoRecognizeReceiptRequestBody;
    security: ImageOcrPhotoRecognizeReceiptSecurity;
}
export declare class ImageOcrPhotoRecognizeReceiptResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    receiptRecognitionResult?: shared.ReceiptRecognitionResult;
    statusCode: number;
}
