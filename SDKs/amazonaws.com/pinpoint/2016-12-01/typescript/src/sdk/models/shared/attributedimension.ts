import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeTypeEnum } from "./attributetypeenum";



// AttributeDimension
/** 
 * Specifies attribute-based criteria for including or excluding endpoints from a segment.
**/
export class AttributeDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeType" })
  attributeType?: AttributeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
