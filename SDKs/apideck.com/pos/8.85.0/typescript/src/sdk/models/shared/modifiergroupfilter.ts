import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifierGroupFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=modifier_group_id" })
  modifierGroupId?: string;
}
