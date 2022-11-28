import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceAttributeEnum } from "./resourceattributeenum";
import { RequiresRecreationEnum } from "./requiresrecreationenum";



// ResourceTargetDefinition
/** 
 * Information about a change to a resource attribute.
**/
export class ResourceTargetDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attribute" })
  attribute?: ResourceAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RequiresRecreation" })
  requiresRecreation?: RequiresRecreationEnum;
}
