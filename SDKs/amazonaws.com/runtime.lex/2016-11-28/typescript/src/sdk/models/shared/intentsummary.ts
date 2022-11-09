import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfirmationStatusEnum } from "./confirmationstatusenum";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
import { FulfillmentStateEnum } from "./fulfillmentstateenum";


// IntentSummary
/** 
 * Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
**/
export class IntentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkpointLabel" })
  checkpointLabel?: string;

  @Metadata({ data: "json, name=confirmationStatus" })
  confirmationStatus?: ConfirmationStatusEnum;

  @Metadata({ data: "json, name=dialogActionType" })
  dialogActionType: DialogActionTypeEnum;

  @Metadata({ data: "json, name=fulfillmentState" })
  fulfillmentState?: FulfillmentStateEnum;

  @Metadata({ data: "json, name=intentName" })
  intentName?: string;

  @Metadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @Metadata({ data: "json, name=slots" })
  slots?: Map<string, string>;
}
