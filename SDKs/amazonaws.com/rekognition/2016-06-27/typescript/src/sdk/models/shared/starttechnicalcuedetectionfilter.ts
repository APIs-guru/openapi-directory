import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlackFrame } from "./blackframe";



// StartTechnicalCueDetectionFilter
/** 
 * Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
**/
export class StartTechnicalCueDetectionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlackFrame" })
  blackFrame?: BlackFrame;

  @SpeakeasyMetadata({ data: "json, name=MinSegmentConfidence" })
  minSegmentConfidence?: number;
}
