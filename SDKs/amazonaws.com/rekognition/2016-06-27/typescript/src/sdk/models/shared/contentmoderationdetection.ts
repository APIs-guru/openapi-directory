import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModerationLabel } from "./moderationlabel";


// ContentModerationDetection
/** 
 * Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
**/
export class ContentModerationDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModerationLabel" })
  moderationLabel?: ModerationLabel;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
