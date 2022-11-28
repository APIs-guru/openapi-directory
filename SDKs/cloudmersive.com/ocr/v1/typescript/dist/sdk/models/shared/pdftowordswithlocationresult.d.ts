import { SpeakeasyBase } from "../../../internal/utils";
import { OcrPageResultWithWordsWithLocation } from "./ocrpageresultwithwordswithlocation";
/**
 * Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
**/
export declare class PdfToWordsWithLocationResult extends SpeakeasyBase {
    ocrPages?: OcrPageResultWithWordsWithLocation[];
    successful?: boolean;
}
