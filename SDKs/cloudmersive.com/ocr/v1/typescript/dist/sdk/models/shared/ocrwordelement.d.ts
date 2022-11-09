import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A single word in an OCR document
**/
export declare class OcrWordElement extends SpeakeasyBase {
    blockNumber?: number;
    confidenceLevel?: number;
    height?: number;
    lineNumber?: number;
    pageNumber?: number;
    paragraphNumber?: number;
    width?: number;
    wordNumber?: number;
    wordText?: string;
    xLeft?: number;
    yTop?: number;
}
