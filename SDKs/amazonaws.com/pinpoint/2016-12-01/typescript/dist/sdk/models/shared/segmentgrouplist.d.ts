import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentGroup } from "./segmentgroup";
import { IncludeEnum } from "./includeenum";
/**
 * Specifies the settings that define the relationships between segment groups for a segment.
**/
export declare class SegmentGroupList extends SpeakeasyBase {
    groups?: SegmentGroup[];
    include?: IncludeEnum;
}
