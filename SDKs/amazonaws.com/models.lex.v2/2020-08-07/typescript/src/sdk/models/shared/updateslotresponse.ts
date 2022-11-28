import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MultipleValuesSetting } from "./multiplevaluessetting";
import { ObfuscationSetting } from "./obfuscationsetting";
import { SlotValueElicitationSetting } from "./slotvalueelicitationsetting";



export class UpdateSlotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=intentId" })
  intentId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=localeId" })
  localeId?: string;

  @SpeakeasyMetadata({ data: "json, name=multipleValuesSetting" })
  multipleValuesSetting?: MultipleValuesSetting;

  @SpeakeasyMetadata({ data: "json, name=obfuscationSetting" })
  obfuscationSetting?: ObfuscationSetting;

  @SpeakeasyMetadata({ data: "json, name=slotId" })
  slotId?: string;

  @SpeakeasyMetadata({ data: "json, name=slotName" })
  slotName?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=valueElicitationSetting" })
  valueElicitationSetting?: SlotValueElicitationSetting;
}
