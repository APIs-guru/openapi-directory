import { SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";
/**
 * A contiguous line of text in an OCR document
**/
export declare class OcrLineElement extends SpeakeasyBase {
    lineText?: string;
    words?: OcrWordElement[];
}
