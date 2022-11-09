import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrFiltersForSegment } from "./orfiltersforsegment";

export enum SegmentSequenceStepMatchTypeEnum {
    UnspecifiedMatchType = "UNSPECIFIED_MATCH_TYPE"
,    Precedes = "PRECEDES"
,    ImmediatelyPrecedes = "IMMEDIATELY_PRECEDES"
}


// SegmentSequenceStep
/** 
 * A segment sequence definition.
**/
export class SegmentSequenceStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchType" })
  matchType?: SegmentSequenceStepMatchTypeEnum;

  @Metadata({ data: "json, name=orFiltersForSegment", elemType: shared.OrFiltersForSegment })
  orFiltersForSegment?: OrFiltersForSegment[];
}
