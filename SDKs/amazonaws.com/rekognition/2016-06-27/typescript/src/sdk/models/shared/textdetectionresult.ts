import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextDetection } from "./textdetection";



// TextDetectionResult
/** 
 * Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
**/
export class TextDetectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TextDetection" })
  textDetection?: TextDetection;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
