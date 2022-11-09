import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PdfOcrPdfToLinesWithLocationHeaders extends SpeakeasyBase {
    language?: string;
    preprocessing?: string;
}
export declare class PdfOcrPdfToLinesWithLocationRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PdfOcrPdfToLinesWithLocationRequestBody extends SpeakeasyBase {
    imageFile: PdfOcrPdfToLinesWithLocationRequestBodyImageFile;
}
export declare class PdfOcrPdfToLinesWithLocationSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PdfOcrPdfToLinesWithLocationRequest extends SpeakeasyBase {
    headers: PdfOcrPdfToLinesWithLocationHeaders;
    request: PdfOcrPdfToLinesWithLocationRequestBody;
    security: PdfOcrPdfToLinesWithLocationSecurity;
}
export declare class PdfOcrPdfToLinesWithLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    pdfToLinesWithLocationResult?: shared.PdfToLinesWithLocationResult;
    statusCode: number;
}
