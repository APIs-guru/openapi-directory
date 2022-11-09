import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ImageOcrPhotoRecognizeFormAdvancedHeaders extends SpeakeasyBase {
    bucketId?: string;
    bucketSecretKey?: string;
    diagnostics?: string;
    preprocessing?: string;
    recognitionMode?: string;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedRequest extends SpeakeasyBase {
    headers: ImageOcrPhotoRecognizeFormAdvancedHeaders;
    request: ImageOcrPhotoRecognizeFormAdvancedRequestBody;
    security: ImageOcrPhotoRecognizeFormAdvancedSecurity;
}
export declare class ImageOcrPhotoRecognizeFormAdvancedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    formRecognitionResult?: shared.FormRecognitionResult;
    statusCode: number;
}
