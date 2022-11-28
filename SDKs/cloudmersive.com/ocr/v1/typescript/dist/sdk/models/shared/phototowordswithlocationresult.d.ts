import { SpeakeasyBase } from "../../../internal/utils";
import { OcrPhotoTextElement } from "./ocrphototextelement";
/**
 * Result of an photo to words-with-location OCR operation
**/
export declare class PhotoToWordsWithLocationResult extends SpeakeasyBase {
    diagnosticImage?: string;
    successful?: boolean;
    textElements?: OcrPhotoTextElement[];
}
