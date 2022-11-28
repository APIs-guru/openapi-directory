import { SpeakeasyBase } from "../../../internal/utils";
import { OcrPageResultWithLinesWithLocation } from "./ocrpageresultwithlineswithlocation";
/**
 * Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
**/
export declare class PdfToLinesWithLocationResult extends SpeakeasyBase {
    ocrPages?: OcrPageResultWithLinesWithLocation[];
    successful?: boolean;
}
