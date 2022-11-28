import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionExpiryEnum } from "./interactionexpiryenum";
import { InteractionGroupEnum } from "./interactiongroupenum";
/**
 * Limit interactions to a specific type of user for a specified duration
**/
export declare class InteractionLimit extends SpeakeasyBase {
    expiry?: InteractionExpiryEnum;
    limit: InteractionGroupEnum;
}
