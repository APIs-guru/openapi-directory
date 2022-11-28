import { SpeakeasyBase } from "../../../internal/utils";
import { TextDetection } from "./textdetection";
export declare class DetectTextResponse extends SpeakeasyBase {
    textDetections?: TextDetection[];
    textModelVersion?: string;
}
