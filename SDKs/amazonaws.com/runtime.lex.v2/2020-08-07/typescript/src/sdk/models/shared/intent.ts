import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfirmationStateEnum } from "./confirmationstateenum";
import { Slot } from "./slot";
import { IntentStateEnum } from "./intentstateenum";



// Intent
/** 
 * The current intent that Amazon Lex V2 is attempting to fulfill.
**/
export class Intent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmationState" })
  confirmationState?: ConfirmationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slots", elemType: Slot })
  slots?: Map<string, Slot>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: IntentStateEnum;
}
