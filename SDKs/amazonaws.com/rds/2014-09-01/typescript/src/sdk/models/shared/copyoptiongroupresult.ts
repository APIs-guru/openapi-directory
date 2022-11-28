import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroup } from "./optiongroup";



export class CopyOptionGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroup?: OptionGroup;
}
