import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Response from an OCR to text operation.  Includes the confience rating and converted text result.
**/
export declare class ImageToTextResponse extends SpeakeasyBase {
    meanConfidenceLevel?: number;
    textResult?: string;
}
