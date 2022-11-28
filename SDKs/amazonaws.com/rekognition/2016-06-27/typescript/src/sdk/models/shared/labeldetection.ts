import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";



// LabelDetection
/** 
 * Information about a label detected in a video analysis request and the time the label was detected in the video. 
**/
export class LabelDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: Label;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
