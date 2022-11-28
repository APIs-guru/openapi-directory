import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotDefaultValueSpec } from "./slotdefaultvaluespec";
import { ObfuscationSettingEnum } from "./obfuscationsettingenum";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { Prompt } from "./prompt";



// Slot
/** 
 * Identifies the version of a specific slot.
**/
export class Slot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValueSpec" })
  defaultValueSpec?: SlotDefaultValueSpec;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=obfuscationSetting" })
  obfuscationSetting?: ObfuscationSettingEnum;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleUtterances" })
  sampleUtterances?: string[];

  @SpeakeasyMetadata({ data: "json, name=slotConstraint" })
  slotConstraint: SlotConstraintEnum;

  @SpeakeasyMetadata({ data: "json, name=slotType" })
  slotType?: string;

  @SpeakeasyMetadata({ data: "json, name=slotTypeVersion" })
  slotTypeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=valueElicitationPrompt" })
  valueElicitationPrompt?: Prompt;
}
