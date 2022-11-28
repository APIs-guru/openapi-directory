import { SpeakeasyBase } from "../../../internal/utils";
import { OrFiltersForSegment } from "./orfiltersforsegment";
export declare enum SegmentSequenceStepMatchTypeEnum {
    UnspecifiedMatchType = "UNSPECIFIED_MATCH_TYPE",
    Precedes = "PRECEDES",
    ImmediatelyPrecedes = "IMMEDIATELY_PRECEDES"
}
/**
 * A segment sequence definition.
**/
export declare class SegmentSequenceStep extends SpeakeasyBase {
    matchType?: SegmentSequenceStepMatchTypeEnum;
    orFiltersForSegment?: OrFiltersForSegment[];
}
