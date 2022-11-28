import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOption } from "./optiongroupoption";



export class OptionGroupOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupOption })
  optionGroupOptions?: OptionGroupOption[];
}
