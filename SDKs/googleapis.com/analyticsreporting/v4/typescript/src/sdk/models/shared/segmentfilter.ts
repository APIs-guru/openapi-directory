import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SequenceSegment } from "./sequencesegment";
import { SimpleSegment } from "./simplesegment";


// SegmentFilter
/** 
 * SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
**/
export class SegmentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=not" })
  not?: boolean;

  @Metadata({ data: "json, name=sequenceSegment" })
  sequenceSegment?: SequenceSegment;

  @Metadata({ data: "json, name=simpleSegment" })
  simpleSegment?: SimpleSegment;
}
