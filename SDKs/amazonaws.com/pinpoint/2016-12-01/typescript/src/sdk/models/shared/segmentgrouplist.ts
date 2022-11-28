import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentGroup } from "./segmentgroup";
import { IncludeEnum } from "./includeenum";



// SegmentGroupList
/** 
 * Specifies the settings that define the relationships between segment groups for a segment.
**/
export class SegmentGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Groups", elemType: SegmentGroup })
  groups?: SegmentGroup[];

  @SpeakeasyMetadata({ data: "json, name=Include" })
  include?: IncludeEnum;
}
