import { SpeakeasyBase } from "../../../internal/utils";
import { ConfirmationStatusEnum } from "./confirmationstatusenum";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
import { FulfillmentStateEnum } from "./fulfillmentstateenum";
/**
 * Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
**/
export declare class IntentSummary extends SpeakeasyBase {
    checkpointLabel?: string;
    confirmationStatus?: ConfirmationStatusEnum;
    dialogActionType: DialogActionTypeEnum;
    fulfillmentState?: FulfillmentStateEnum;
    intentName?: string;
    slotToElicit?: string;
    slots?: Map<string, string>;
}
