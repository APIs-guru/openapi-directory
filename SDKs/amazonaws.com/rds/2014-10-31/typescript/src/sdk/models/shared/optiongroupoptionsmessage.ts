import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOption } from "./optiongroupoption";



// OptionGroupOptionsMessage
/** 
 * <p/>
**/
export class OptionGroupOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupOption })
  optionGroupOptions?: OptionGroupOption[];
}
