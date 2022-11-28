import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShotSegment
/** 
 * Information about a shot detection segment detected in a video. For more information, see <a>SegmentDetection</a>.
**/
export class ShotSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;
}
