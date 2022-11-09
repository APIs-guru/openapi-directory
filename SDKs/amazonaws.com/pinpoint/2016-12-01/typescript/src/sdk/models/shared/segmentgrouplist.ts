import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentGroup } from "./segmentgroup";
import { IncludeEnum } from "./includeenum";


// SegmentGroupList
/** 
 * Specifies the settings that define the relationships between segment groups for a segment.
**/
export class SegmentGroupList extends SpeakeasyBase {
  @Metadata({ data: "json, name=Groups", elemType: shared.SegmentGroup })
  groups?: SegmentGroup[];

  @Metadata({ data: "json, name=Include" })
  include?: IncludeEnum;
}
