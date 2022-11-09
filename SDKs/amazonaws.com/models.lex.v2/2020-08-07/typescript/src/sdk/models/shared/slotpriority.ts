import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlotPriority
/** 
 * Sets the priority that Amazon Lex should use when eliciting slot values from a user.
**/
export class SlotPriority extends SpeakeasyBase {
  @Metadata({ data: "json, name=priority" })
  priority: number;

  @Metadata({ data: "json, name=slotId" })
  slotId: string;
}
