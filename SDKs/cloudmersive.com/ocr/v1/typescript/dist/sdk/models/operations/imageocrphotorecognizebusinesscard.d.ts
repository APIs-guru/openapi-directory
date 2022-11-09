import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPhotoRecognizeBusinessCardRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile;
}
export declare class ImageOcrPhotoRecognizeBusinessCardSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrPhotoRecognizeBusinessCardRequest extends SpeakeasyBase {
    request: ImageOcrPhotoRecognizeBusinessCardRequestBody;
    security: ImageOcrPhotoRecognizeBusinessCardSecurity;
}
export declare class ImageOcrPhotoRecognizeBusinessCardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    businessCardRecognitionResult?: shared.BusinessCardRecognitionResult;
    contentType: string;
    statusCode: number;
}
