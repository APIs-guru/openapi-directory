import { SpeakeasyBase } from "../../../internal/utils";
import { ModificationResourceEnumEnum } from "./modificationresourceenumenum";
import { ModificationStateEnumEnum } from "./modificationstateenumenum";
/**
 * Describes a WorkSpace modification.
**/
export declare class ModificationState extends SpeakeasyBase {
    resource?: ModificationResourceEnumEnum;
    state?: ModificationStateEnumEnum;
}
