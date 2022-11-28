import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImageOcrPhotoWordsWithLocationHeaders extends SpeakeasyBase {
    diagnostics?: string;
    language?: string;
    preprocessing?: string;
    recognitionMode?: string;
}
export declare class ImageOcrPhotoWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPhotoWordsWithLocationRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrPhotoWordsWithLocationRequestBodyImageFile;
}
export declare class ImageOcrPhotoWordsWithLocationSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrPhotoWordsWithLocationRequest extends SpeakeasyBase {
    headers: ImageOcrPhotoWordsWithLocationHeaders;
    request: ImageOcrPhotoWordsWithLocationRequestBody;
    security: ImageOcrPhotoWordsWithLocationSecurity;
}
export declare class ImageOcrPhotoWordsWithLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    photoToWordsWithLocationResult?: shared.PhotoToWordsWithLocationResult;
    statusCode: number;
}
