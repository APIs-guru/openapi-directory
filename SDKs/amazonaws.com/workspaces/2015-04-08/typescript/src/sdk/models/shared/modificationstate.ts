import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModificationResourceEnumEnum } from "./modificationresourceenumenum";
import { ModificationStateEnumEnum } from "./modificationstateenumenum";


// ModificationState
/** 
 * Describes a WorkSpace modification.
**/
export class ModificationState extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resource" })
  resource?: ModificationResourceEnumEnum;

  @Metadata({ data: "json, name=State" })
  state?: ModificationStateEnumEnum;
}
