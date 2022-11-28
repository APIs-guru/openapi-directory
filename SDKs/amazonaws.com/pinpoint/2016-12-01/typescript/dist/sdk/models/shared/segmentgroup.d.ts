import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentReference } from "./segmentreference";
import { SourceTypeEnum } from "./sourcetypeenum";
import { TypeEnum } from "./typeenum";
/**
 * Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
**/
export declare class SegmentGroup extends SpeakeasyBase {
    dimensions?: SegmentDimensions[];
    sourceSegments?: SegmentReference[];
    sourceType?: SourceTypeEnum;
    type?: TypeEnum;
}
