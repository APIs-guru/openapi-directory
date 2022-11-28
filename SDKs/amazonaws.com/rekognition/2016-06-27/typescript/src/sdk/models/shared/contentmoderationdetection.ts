import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModerationLabel } from "./moderationlabel";



// ContentModerationDetection
/** 
 * Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
**/
export class ContentModerationDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModerationLabel" })
  moderationLabel?: ModerationLabel;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
