import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TechnicalCueTypeEnum } from "./technicalcuetypeenum";



// TechnicalCueSegment
/** 
 * Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
**/
export class TechnicalCueSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TechnicalCueTypeEnum;
}
