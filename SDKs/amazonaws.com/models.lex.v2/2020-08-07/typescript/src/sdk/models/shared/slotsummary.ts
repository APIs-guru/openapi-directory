import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { PromptSpecification } from "./promptspecification";


// SlotSummary
/** 
 * Summary information about a slot, a value that the bot elicits from the user.
**/
export class SlotSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=slotConstraint" })
  slotConstraint?: SlotConstraintEnum;

  @Metadata({ data: "json, name=slotId" })
  slotId?: string;

  @Metadata({ data: "json, name=slotName" })
  slotName?: string;

  @Metadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @Metadata({ data: "json, name=valueElicitationPromptSpecification" })
  valueElicitationPromptSpecification?: PromptSpecification;
}
