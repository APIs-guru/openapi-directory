import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfirmationStatusEnum } from "./confirmationstatusenum";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
import { FulfillmentStateEnum } from "./fulfillmentstateenum";



// IntentSummary
/** 
 * Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
**/
export class IntentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkpointLabel" })
  checkpointLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=confirmationStatus" })
  confirmationStatus?: ConfirmationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=dialogActionType" })
  dialogActionType: DialogActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentState" })
  fulfillmentState?: FulfillmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName?: string;

  @SpeakeasyMetadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @SpeakeasyMetadata({ data: "json, name=slots" })
  slots?: Map<string, string>;
}
