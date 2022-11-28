import { SpeakeasyBase } from "../../../internal/utils";
import { BlackFrame } from "./blackframe";
/**
 * Filters for the technical segments returned by <a>GetSegmentDetection</a>. For more information, see <a>StartSegmentDetectionFilters</a>.
**/
export declare class StartTechnicalCueDetectionFilter extends SpeakeasyBase {
    blackFrame?: BlackFrame;
    minSegmentConfidence?: number;
}
