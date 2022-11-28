import { SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";
/**
 * OCR results of a page, including words of text and their location
**/
export declare class OcrPageResultWithWordsWithLocation extends SpeakeasyBase {
    pageNumber?: number;
    successful?: boolean;
    words?: OcrWordElement[];
}
