import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlotPriority
/** 
 * Sets the priority that Amazon Lex should use when eliciting slot values from a user.
**/
export class SlotPriority extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=slotId" })
  slotId: string;
}
