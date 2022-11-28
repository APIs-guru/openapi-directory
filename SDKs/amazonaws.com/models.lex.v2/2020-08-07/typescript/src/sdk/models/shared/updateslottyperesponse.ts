import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeValue } from "./slottypevalue";
import { SlotValueSelectionSetting } from "./slotvalueselectionsetting";



export class UpdateSlotTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeName" })
  slotTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeValues", elemType: SlotTypeValue })
  slotTypeValues?: SlotTypeValue[];

  @SpeakeasyMetadata({ data: "json, name=valueSelectionSetting" })
  valueSelectionSetting?: SlotValueSelectionSetting;
}
