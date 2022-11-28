import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroup } from "./optiongroup";



export class OptionGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OptionGroup })
  optionGroupsList?: OptionGroup[];
}
