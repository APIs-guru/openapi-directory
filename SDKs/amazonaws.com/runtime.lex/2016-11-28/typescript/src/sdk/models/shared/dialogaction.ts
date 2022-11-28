import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FulfillmentStateEnum } from "./fulfillmentstateenum";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";



// DialogAction
/** 
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
export class DialogAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fulfillmentState" })
  fulfillmentState?: FulfillmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=messageFormat" })
  messageFormat?: MessageFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @SpeakeasyMetadata({ data: "json, name=slots" })
  slots?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: DialogActionTypeEnum;
}
