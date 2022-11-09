import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Label } from "./label";


// LabelDetection
/** 
 * Information about a label detected in a video analysis request and the time the label was detected in the video. 
**/
export class LabelDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=Label" })
  label?: Label;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
