import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlotTypeSummary
/** 
 * Provides summary information about a slot type.
**/
export class SlotTypeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @Metadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @Metadata({ data: "json, name=slotTypeName" })
  slotTypeName?: string;
}
