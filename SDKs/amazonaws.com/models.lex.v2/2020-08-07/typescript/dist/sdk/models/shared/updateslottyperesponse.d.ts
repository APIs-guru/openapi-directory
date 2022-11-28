import { SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeValue } from "./slottypevalue";
import { SlotValueSelectionSetting } from "./slotvalueselectionsetting";
export declare class UpdateSlotTypeResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    lastUpdatedDateTime?: Date;
    localeId?: string;
    parentSlotTypeSignature?: string;
    slotTypeId?: string;
    slotTypeName?: string;
    slotTypeValues?: SlotTypeValue[];
    valueSelectionSetting?: SlotValueSelectionSetting;
}
