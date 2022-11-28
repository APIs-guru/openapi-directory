import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensions } from "./segmentdimensions";
import { SegmentReference } from "./segmentreference";
import { SourceTypeEnum } from "./sourcetypeenum";
import { TypeEnum } from "./typeenum";



// SegmentGroup
/** 
 * Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
**/
export class SegmentGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: SegmentDimensions })
  dimensions?: SegmentDimensions[];

  @SpeakeasyMetadata({ data: "json, name=SourceSegments", elemType: SegmentReference })
  sourceSegments?: SegmentReference[];

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
