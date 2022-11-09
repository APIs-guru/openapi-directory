import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OcrLineElement } from "./ocrlineelement";
/**
 * OCR results of a page, including lines of text and their location
**/
export declare class OcrPageResultWithLinesWithLocation extends SpeakeasyBase {
    lines?: OcrLineElement[];
    pageNumber?: number;
    successful?: boolean;
}
