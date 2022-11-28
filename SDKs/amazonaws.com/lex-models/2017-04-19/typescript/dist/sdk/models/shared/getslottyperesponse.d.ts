import { SpeakeasyBase } from "../../../internal/utils";
import { EnumerationValue } from "./enumerationvalue";
import { SlotTypeConfiguration } from "./slottypeconfiguration";
import { SlotValueSelectionStrategyEnum } from "./slotvalueselectionstrategyenum";
export declare class GetSlotTypeResponse extends SpeakeasyBase {
    checksum?: string;
    createdDate?: Date;
    description?: string;
    enumerationValues?: EnumerationValue[];
    lastUpdatedDate?: Date;
    name?: string;
    parentSlotTypeSignature?: string;
    slotTypeConfigurations?: SlotTypeConfiguration[];
    valueSelectionStrategy?: SlotValueSelectionStrategyEnum;
    version?: string;
}
