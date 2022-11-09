import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SlotTypeValue } from "./slottypevalue";
import { SlotValueSelectionSetting } from "./slotvalueselectionsetting";


export class CreateSlotTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=parentSlotTypeSignature" })
  parentSlotTypeSignature?: string;

  @Metadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @Metadata({ data: "json, name=slotTypeName" })
  slotTypeName?: string;

  @Metadata({ data: "json, name=slotTypeValues", elemType: shared.SlotTypeValue })
  slotTypeValues?: SlotTypeValue[];

  @Metadata({ data: "json, name=valueSelectionSetting" })
  valueSelectionSetting?: SlotValueSelectionSetting;
}
