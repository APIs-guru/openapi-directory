import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InteractionExpiryEnum } from "./interactionexpiryenum";
import { InteractionGroupEnum } from "./interactiongroupenum";


// InteractionLimit
/** 
 * Limit interactions to a specific type of user for a specified duration
**/
export class InteractionLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiry" })
  expiry?: InteractionExpiryEnum;

  @Metadata({ data: "json, name=limit" })
  limit: InteractionGroupEnum;
}
