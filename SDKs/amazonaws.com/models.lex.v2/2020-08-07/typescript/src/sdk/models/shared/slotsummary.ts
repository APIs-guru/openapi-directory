import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { PromptSpecification } from "./promptspecification";



// SlotSummary
/** 
 * Summary information about a slot, a value that the bot elicits from the user.
**/
export class SlotSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=slotConstraint" })
  slotConstraint?: SlotConstraintEnum;

  @SpeakeasyMetadata({ data: "json, name=slotId" })
  slotId?: string;

  @SpeakeasyMetadata({ data: "json, name=slotName" })
  slotName?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=valueElicitationPromptSpecification" })
  valueElicitationPromptSpecification?: PromptSpecification;
}
