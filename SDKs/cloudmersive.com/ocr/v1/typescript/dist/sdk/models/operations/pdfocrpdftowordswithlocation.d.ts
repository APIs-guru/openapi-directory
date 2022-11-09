import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PdfOcrPdfToWordsWithLocationHeaders extends SpeakeasyBase {
    language?: string;
    preprocessing?: string;
}
export declare class PdfOcrPdfToWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PdfOcrPdfToWordsWithLocationRequestBody extends SpeakeasyBase {
    imageFile: PdfOcrPdfToWordsWithLocationRequestBodyImageFile;
}
export declare class PdfOcrPdfToWordsWithLocationSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PdfOcrPdfToWordsWithLocationRequest extends SpeakeasyBase {
    headers: PdfOcrPdfToWordsWithLocationHeaders;
    request: PdfOcrPdfToWordsWithLocationRequestBody;
    security: PdfOcrPdfToWordsWithLocationSecurity;
}
export declare class PdfOcrPdfToWordsWithLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    pdfToWordsWithLocationResult?: shared.PdfToWordsWithLocationResult;
    statusCode: number;
}
