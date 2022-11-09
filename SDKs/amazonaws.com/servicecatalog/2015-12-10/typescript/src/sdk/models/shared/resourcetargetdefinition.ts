import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceAttributeEnum } from "./resourceattributeenum";
import { RequiresRecreationEnum } from "./requiresrecreationenum";


// ResourceTargetDefinition
/** 
 * Information about a change to a resource attribute.
**/
export class ResourceTargetDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attribute" })
  attribute?: ResourceAttributeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RequiresRecreation" })
  requiresRecreation?: RequiresRecreationEnum;
}
