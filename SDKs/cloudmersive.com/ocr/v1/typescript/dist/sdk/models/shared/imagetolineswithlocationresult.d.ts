import { SpeakeasyBase } from "../../../internal/utils";
import { OcrLineElement } from "./ocrlineelement";
/**
 * Result of an image to lines-with-location OCR operation
**/
export declare class ImageToLinesWithLocationResult extends SpeakeasyBase {
    lines?: OcrLineElement[];
    successful?: boolean;
}
