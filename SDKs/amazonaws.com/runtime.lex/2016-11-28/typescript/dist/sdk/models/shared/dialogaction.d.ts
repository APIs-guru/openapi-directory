import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FulfillmentStateEnum } from "./fulfillmentstateenum";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
/**
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
export declare class DialogAction extends SpeakeasyBase {
    fulfillmentState?: FulfillmentStateEnum;
    intentName?: string;
    message?: string;
    messageFormat?: MessageFormatTypeEnum;
    slotToElicit?: string;
    slots?: Map<string, string>;
    type: DialogActionTypeEnum;
}
