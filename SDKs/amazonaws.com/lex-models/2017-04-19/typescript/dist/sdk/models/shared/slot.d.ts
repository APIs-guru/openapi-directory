import { SpeakeasyBase } from "../../../internal/utils";
import { SlotDefaultValueSpec } from "./slotdefaultvaluespec";
import { ObfuscationSettingEnum } from "./obfuscationsettingenum";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { Prompt } from "./prompt";
/**
 * Identifies the version of a specific slot.
**/
export declare class Slot extends SpeakeasyBase {
    defaultValueSpec?: SlotDefaultValueSpec;
    description?: string;
    name: string;
    obfuscationSetting?: ObfuscationSettingEnum;
    priority?: number;
    responseCard?: string;
    sampleUtterances?: string[];
    slotConstraint: SlotConstraintEnum;
    slotType?: string;
    slotTypeVersion?: string;
    valueElicitationPrompt?: Prompt;
}
