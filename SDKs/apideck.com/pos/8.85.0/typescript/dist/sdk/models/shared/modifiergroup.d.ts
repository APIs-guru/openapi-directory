import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class ModifierGroup extends SpeakeasyBase {
    alternateName?: string;
    createdAt?: Date;
    createdBy?: string;
    deleted?: boolean;
    id?: string;
    maximumAllowed?: number;
    minimumRequired?: number;
    modifiers?: any[];
    name?: string;
    presentAtAllLocations?: boolean;
    rowVersion?: string;
    selectionType?: ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
export declare class ModifierGroupInput extends SpeakeasyBase {
    alternateName?: string;
    deleted?: boolean;
    maximumAllowed?: number;
    minimumRequired?: number;
    modifiers?: any[];
    name?: string;
    presentAtAllLocations?: boolean;
    rowVersion?: string;
    selectionType?: ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
}
