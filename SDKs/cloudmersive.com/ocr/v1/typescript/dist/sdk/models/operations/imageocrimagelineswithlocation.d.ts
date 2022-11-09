import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ImageOcrImageLinesWithLocationHeaders extends SpeakeasyBase {
    language?: string;
    preprocessing?: string;
}
export declare class ImageOcrImageLinesWithLocationRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrImageLinesWithLocationRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrImageLinesWithLocationRequestBodyImageFile;
}
export declare class ImageOcrImageLinesWithLocationSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrImageLinesWithLocationRequest extends SpeakeasyBase {
    headers: ImageOcrImageLinesWithLocationHeaders;
    request: ImageOcrImageLinesWithLocationRequestBody;
    security: ImageOcrImageLinesWithLocationSecurity;
}
export declare class ImageOcrImageLinesWithLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imageToLinesWithLocationResult?: shared.ImageToLinesWithLocationResult;
    statusCode: number;
}
