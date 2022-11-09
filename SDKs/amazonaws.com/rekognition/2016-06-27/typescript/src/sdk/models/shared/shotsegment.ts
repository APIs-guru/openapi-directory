import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShotSegment
/** 
 * Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>.
**/
export class ShotSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Index" })
  index?: number;
}
