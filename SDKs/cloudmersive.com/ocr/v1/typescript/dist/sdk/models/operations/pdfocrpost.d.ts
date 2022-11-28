import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PdfOcrPostHeaders extends SpeakeasyBase {
    language?: string;
    preprocessing?: string;
    recognitionMode?: string;
}
export declare class PdfOcrPostRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PdfOcrPostRequestBody extends SpeakeasyBase {
    imageFile: PdfOcrPostRequestBodyImageFile;
}
export declare class PdfOcrPostSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PdfOcrPostRequest extends SpeakeasyBase {
    headers: PdfOcrPostHeaders;
    request: PdfOcrPostRequestBody;
    security: PdfOcrPostSecurity;
}
export declare class PdfOcrPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    pdfToTextResponse?: shared.PdfToTextResponse;
    statusCode: number;
}
