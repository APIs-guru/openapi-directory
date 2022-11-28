import { SpeakeasyBase } from "../../../internal/utils";
import { Point } from "./point";
/**
 * A single text in an OCR document
**/
export declare class OcrPhotoTextElement extends SpeakeasyBase {
    boundingPoints?: Point[];
    confidenceLevel?: number;
    height?: number;
    text?: string;
    width?: number;
    xLeft?: number;
    yTop?: number;
}
