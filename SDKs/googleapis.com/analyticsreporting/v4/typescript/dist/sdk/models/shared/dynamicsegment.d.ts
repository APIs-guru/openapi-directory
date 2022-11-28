import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentDefinition } from "./segmentdefinition";
/**
 * Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
**/
export declare class DynamicSegment extends SpeakeasyBase {
    name?: string;
    sessionSegment?: SegmentDefinition;
    userSegment?: SegmentDefinition;
}
