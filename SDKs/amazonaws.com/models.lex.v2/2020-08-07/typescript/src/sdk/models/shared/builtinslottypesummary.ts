import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuiltInSlotTypeSummary
/** 
 * Provides summary information about a built-in slot type for the <a>ListBuiltInSlotTypes</a> operation.
**/
export class BuiltInSlotTypeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=slotTypeSignature" })
  slotTypeSignature?: string;
}
