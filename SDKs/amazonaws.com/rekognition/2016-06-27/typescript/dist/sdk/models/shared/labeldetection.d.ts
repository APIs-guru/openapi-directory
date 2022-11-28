import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Information about a label detected in a video analysis request and the time the label was detected in the video.
**/
export declare class LabelDetection extends SpeakeasyBase {
    label?: Label;
    timestamp?: number;
}
