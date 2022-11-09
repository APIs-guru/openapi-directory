import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ImageOcrImageWordsWithLocationHeaders extends SpeakeasyBase {
    language?: string;
    preprocessing?: string;
}
export declare class ImageOcrImageWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrImageWordsWithLocationRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrImageWordsWithLocationRequestBodyImageFile;
}
export declare class ImageOcrImageWordsWithLocationSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrImageWordsWithLocationRequest extends SpeakeasyBase {
    headers: ImageOcrImageWordsWithLocationHeaders;
    request: ImageOcrImageWordsWithLocationRequestBody;
    security: ImageOcrImageWordsWithLocationSecurity;
}
export declare class ImageOcrImageWordsWithLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imageToWordsWithLocationResult?: shared.ImageToWordsWithLocationResult;
    statusCode: number;
}
