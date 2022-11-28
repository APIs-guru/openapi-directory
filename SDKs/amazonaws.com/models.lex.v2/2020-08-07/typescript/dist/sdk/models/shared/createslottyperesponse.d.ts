import { SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeValue } from "./slottypevalue";
import { SlotValueSelectionSetting } from "./slotvalueselectionsetting";
export declare class CreateSlotTypeResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    localeId?: string;
    parentSlotTypeSignature?: string;
    slotTypeId?: string;
    slotTypeName?: string;
    slotTypeValues?: SlotTypeValue[];
    valueSelectionSetting?: SlotValueSelectionSetting;
}
