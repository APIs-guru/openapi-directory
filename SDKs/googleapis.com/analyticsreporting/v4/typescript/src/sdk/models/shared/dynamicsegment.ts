import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentDefinition } from "./segmentdefinition";
import { SegmentDefinition } from "./segmentdefinition";


// DynamicSegment
/** 
 * Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
**/
export class DynamicSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sessionSegment" })
  sessionSegment?: SegmentDefinition;

  @Metadata({ data: "json, name=userSegment" })
  userSegment?: SegmentDefinition;
}
