import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartShotDetectionFilter } from "./startshotdetectionfilter";
import { StartTechnicalCueDetectionFilter } from "./starttechnicalcuedetectionfilter";



// StartSegmentDetectionFilters
/** 
 * Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>. 
**/
export class StartSegmentDetectionFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShotFilter" })
  shotFilter?: StartShotDetectionFilter;

  @SpeakeasyMetadata({ data: "json, name=TechnicalCueFilter" })
  technicalCueFilter?: StartTechnicalCueDetectionFilter;
}
