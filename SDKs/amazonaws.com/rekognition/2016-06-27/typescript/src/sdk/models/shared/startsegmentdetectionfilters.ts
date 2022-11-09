import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartShotDetectionFilter } from "./startshotdetectionfilter";
import { StartTechnicalCueDetectionFilter } from "./starttechnicalcuedetectionfilter";


// StartSegmentDetectionFilters
/** 
 * Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>. 
**/
export class StartSegmentDetectionFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShotFilter" })
  shotFilter?: StartShotDetectionFilter;

  @Metadata({ data: "json, name=TechnicalCueFilter" })
  technicalCueFilter?: StartTechnicalCueDetectionFilter;
}
