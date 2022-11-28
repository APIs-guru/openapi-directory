import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrFiltersForSegment } from "./orfiltersforsegment";


export enum SegmentSequenceStepMatchTypeEnum {
    UnspecifiedMatchType = "UNSPECIFIED_MATCH_TYPE",
    Precedes = "PRECEDES",
    ImmediatelyPrecedes = "IMMEDIATELY_PRECEDES"
}


// SegmentSequenceStep
/** 
 * A segment sequence definition.
**/
export class SegmentSequenceStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: SegmentSequenceStepMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=orFiltersForSegment", elemType: OrFiltersForSegment })
  orFiltersForSegment?: OrFiltersForSegment[];
}
