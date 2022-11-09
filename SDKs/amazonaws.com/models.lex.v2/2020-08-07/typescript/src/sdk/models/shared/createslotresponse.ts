import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MultipleValuesSetting } from "./multiplevaluessetting";
import { ObfuscationSetting } from "./obfuscationsetting";
import { SlotValueElicitationSetting } from "./slotvalueelicitationsetting";


export class CreateSlotResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=intentId" })
  intentId?: string;

  @Metadata({ data: "json, name=localeId" })
  localeId?: string;

  @Metadata({ data: "json, name=multipleValuesSetting" })
  multipleValuesSetting?: MultipleValuesSetting;

  @Metadata({ data: "json, name=obfuscationSetting" })
  obfuscationSetting?: ObfuscationSetting;

  @Metadata({ data: "json, name=slotId" })
  slotId?: string;

  @Metadata({ data: "json, name=slotName" })
  slotName?: string;

  @Metadata({ data: "json, name=slotTypeId" })
  slotTypeId?: string;

  @Metadata({ data: "json, name=valueElicitationSetting" })
  valueElicitationSetting?: SlotValueElicitationSetting;
}
