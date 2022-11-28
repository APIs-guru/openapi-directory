import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InteractionExpiryEnum } from "./interactionexpiryenum";
import { InteractionGroupEnum } from "./interactiongroupenum";



// InteractionLimit
/** 
 * Limit interactions to a specific type of user for a specified duration
**/
export class InteractionLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: InteractionExpiryEnum;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: InteractionGroupEnum;
}
