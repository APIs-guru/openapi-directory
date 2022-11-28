import { SpeakeasyBase } from "../../../internal/utils";
import { StartShotDetectionFilter } from "./startshotdetectionfilter";
import { StartTechnicalCueDetectionFilter } from "./starttechnicalcuedetectionfilter";
/**
 * Filters applied to the technical cue or shot detection segments. For more information, see <a>StartSegmentDetection</a>.
**/
export declare class StartSegmentDetectionFilters extends SpeakeasyBase {
    shotFilter?: StartShotDetectionFilter;
    technicalCueFilter?: StartTechnicalCueDetectionFilter;
}
