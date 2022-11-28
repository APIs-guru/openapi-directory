import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroup } from "./optiongroup";



export class CreateOptionGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroup?: OptionGroup;
}
