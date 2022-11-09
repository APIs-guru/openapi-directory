import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlackFrame } from "./blackframe";


// StartTechnicalCueDetectionFilter
/** 
 * Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
**/
export class StartTechnicalCueDetectionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlackFrame" })
  blackFrame?: BlackFrame;

  @Metadata({ data: "json, name=MinSegmentConfidence" })
  minSegmentConfidence?: number;
}
