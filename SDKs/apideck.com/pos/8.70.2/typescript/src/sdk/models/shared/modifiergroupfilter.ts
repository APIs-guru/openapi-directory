import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifierGroupFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=modifier_group_id" })
  modifierGroupId?: string;
}
