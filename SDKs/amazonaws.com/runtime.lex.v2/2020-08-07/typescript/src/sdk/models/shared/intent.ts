import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfirmationStateEnum } from "./confirmationstateenum";
import { Slot } from "./slot";
import { IntentStateEnum } from "./intentstateenum";


// Intent
/** 
 * The current intent that Amazon Lex V2 is attempting to fulfill.
**/
export class Intent extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirmationState" })
  confirmationState?: ConfirmationStateEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slots", elemType: shared.Slot })
  slots?: Map<string, Slot>;

  @Metadata({ data: "json, name=state" })
  state?: IntentStateEnum;
}
