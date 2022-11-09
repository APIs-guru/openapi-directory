import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TechnicalCueTypeEnum } from "./technicalcuetypeenum";


// TechnicalCueSegment
/** 
 * Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
**/
export class TechnicalCueSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Type" })
  type?: TechnicalCueTypeEnum;
}
