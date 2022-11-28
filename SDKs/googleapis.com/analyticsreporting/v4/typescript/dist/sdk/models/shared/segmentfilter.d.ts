import { SpeakeasyBase } from "../../../internal/utils";
import { SequenceSegment } from "./sequencesegment";
import { SimpleSegment } from "./simplesegment";
/**
 * SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
**/
export declare class SegmentFilter extends SpeakeasyBase {
    not?: boolean;
    sequenceSegment?: SequenceSegment;
    simpleSegment?: SimpleSegment;
}
