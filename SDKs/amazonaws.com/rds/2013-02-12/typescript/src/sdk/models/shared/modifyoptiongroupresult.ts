import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroup } from "./optiongroup";



export class ModifyOptionGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroup?: OptionGroup;
}
