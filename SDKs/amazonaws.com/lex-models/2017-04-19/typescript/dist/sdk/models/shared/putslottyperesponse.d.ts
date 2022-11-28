import { SpeakeasyBase } from "../../../internal/utils";
import { EnumerationValue } from "./enumerationvalue";
import { SlotTypeConfiguration } from "./slottypeconfiguration";
import { SlotValueSelectionStrategyEnum } from "./slotvalueselectionstrategyenum";
export declare class PutSlotTypeResponse extends SpeakeasyBase {
    checksum?: string;
    createVersion?: boolean;
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
