import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlotTypeSummary
/** 
 * Provides summary information about a slot type.
**/
export class SlotTypeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeName" })
  slotTypeName?: string;
}
