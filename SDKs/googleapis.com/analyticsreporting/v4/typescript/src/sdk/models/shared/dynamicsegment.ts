import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentDefinition } from "./segmentdefinition";



// DynamicSegment
/** 
 * Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
**/
export class DynamicSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionSegment" })
  sessionSegment?: SegmentDefinition;

  @SpeakeasyMetadata({ data: "json, name=userSegment" })
  userSegment?: SegmentDefinition;
}
