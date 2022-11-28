import { SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";
/**
 * Result of an image to words-with-location OCR operation
**/
export declare class ImageToWordsWithLocationResult extends SpeakeasyBase {
    successful?: boolean;
    words?: OcrWordElement[];
}
