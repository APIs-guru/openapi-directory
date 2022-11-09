import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentReference } from "./segmentreference";
import { SourceTypeEnum } from "./sourcetypeenum";
import { TypeEnum } from "./typeenum";


// SegmentGroup
/** 
 * Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
**/
export class SegmentGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions", elemType: shared.SegmentDimensions })
  dimensions?: SegmentDimensions[];

  @Metadata({ data: "json, name=SourceSegments", elemType: shared.SegmentReference })
  sourceSegments?: SegmentReference[];

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;

  @Metadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
