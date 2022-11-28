import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuiltInSlotTypeSummary
/** 
 * Provides summary information about a built-in slot type for the <a>ListBuiltInSlotTypes</a> operation.
**/
export class BuiltInSlotTypeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeSignature" })
  slotTypeSignature?: string;
}
