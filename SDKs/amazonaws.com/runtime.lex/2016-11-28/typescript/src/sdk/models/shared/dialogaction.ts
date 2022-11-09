import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FulfillmentStateEnum } from "./fulfillmentstateenum";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";


// DialogAction
/** 
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
export class DialogAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=fulfillmentState" })
  fulfillmentState?: FulfillmentStateEnum;

  @Metadata({ data: "json, name=intentName" })
  intentName?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=messageFormat" })
  messageFormat?: MessageFormatTypeEnum;

  @Metadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @Metadata({ data: "json, name=slots" })
  slots?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type: DialogActionTypeEnum;
}
