import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlotDefaultValueSpec } from "./slotdefaultvaluespec";
import { ObfuscationSettingEnum } from "./obfuscationsettingenum";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { Prompt } from "./prompt";


// Slot
/** 
 * Identifies the version of a specific slot.
**/
export class Slot extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValueSpec" })
  defaultValueSpec?: SlotDefaultValueSpec;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=obfuscationSetting" })
  obfuscationSetting?: ObfuscationSettingEnum;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=responseCard" })
  responseCard?: string;

  @Metadata({ data: "json, name=sampleUtterances" })
  sampleUtterances?: string[];

  @Metadata({ data: "json, name=slotConstraint" })
  slotConstraint: SlotConstraintEnum;

  @Metadata({ data: "json, name=slotType" })
  slotType?: string;

  @Metadata({ data: "json, name=slotTypeVersion" })
  slotTypeVersion?: string;

  @Metadata({ data: "json, name=valueElicitationPrompt" })
  valueElicitationPrompt?: Prompt;
}
