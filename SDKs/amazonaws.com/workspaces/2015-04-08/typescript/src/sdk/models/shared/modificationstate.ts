import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModificationResourceEnumEnum } from "./modificationresourceenumenum";
import { ModificationStateEnumEnum } from "./modificationstateenumenum";



// ModificationState
/** 
 * Describes a WorkSpace modification.
**/
export class ModificationState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource?: ModificationResourceEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ModificationStateEnumEnum;
}
