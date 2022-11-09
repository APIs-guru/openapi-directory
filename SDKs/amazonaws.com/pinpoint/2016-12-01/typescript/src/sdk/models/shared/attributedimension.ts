import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeTypeEnum } from "./attributetypeenum";


// AttributeDimension
/** 
 * Specifies attribute-based criteria for including or excluding endpoints from a segment.
**/
export class AttributeDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeType" })
  attributeType?: AttributeTypeEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
