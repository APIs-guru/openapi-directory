import { SpeakeasyBase } from "../../../internal/utils";
import { TextDetection } from "./textdetection";
/**
 * Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
**/
export declare class TextDetectionResult extends SpeakeasyBase {
    textDetection?: TextDetection;
    timestamp?: number;
}
