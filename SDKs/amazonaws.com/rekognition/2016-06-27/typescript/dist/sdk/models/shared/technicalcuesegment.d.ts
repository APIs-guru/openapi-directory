import { SpeakeasyBase } from "../../../internal/utils";
import { TechnicalCueTypeEnum } from "./technicalcuetypeenum";
/**
 * Information about a technical cue segment. For more information, see <a>SegmentDetection</a>.
**/
export declare class TechnicalCueSegment extends SpeakeasyBase {
    confidence?: number;
    type?: TechnicalCueTypeEnum;
}
