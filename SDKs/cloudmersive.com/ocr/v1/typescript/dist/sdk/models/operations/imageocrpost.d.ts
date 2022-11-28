import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImageOcrPostHeaders extends SpeakeasyBase {
    language?: string;
    preprocessing?: string;
    recognitionMode?: string;
}
export declare class ImageOcrPostRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ImageOcrPostRequestBody extends SpeakeasyBase {
    imageFile: ImageOcrPostRequestBodyImageFile;
}
export declare class ImageOcrPostSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ImageOcrPostRequest extends SpeakeasyBase {
    headers: ImageOcrPostHeaders;
    request: ImageOcrPostRequestBody;
    security: ImageOcrPostSecurity;
}
export declare class ImageOcrPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imageToTextResponse?: shared.ImageToTextResponse;
    statusCode: number;
}
