import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImageOcrPhotoToTextHeaders extends SpeakeasyBase {
    language?: string;
    recognitionMode?: string;
}
export declare class ImageOcrPhotoToTextRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPhotoToTextRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrPhotoToTextRequestBodyImageFile;
}
export declare class ImageOcrPhotoToTextSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrPhotoToTextRequest extends SpeakeasyBase {
    headers: ImageOcrPhotoToTextHeaders;
    request: ImageOcrPhotoToTextRequestBody;
    security: ImageOcrPhotoToTextSecurity;
}
export declare class ImageOcrPhotoToTextResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imageToTextResponse?: shared.ImageToTextResponse;
    statusCode: number;
}
