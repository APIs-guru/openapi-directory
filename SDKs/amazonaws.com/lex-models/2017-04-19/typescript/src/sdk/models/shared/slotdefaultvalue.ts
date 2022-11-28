import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlotDefaultValue
/** 
 * A default value for a slot.
**/
export class SlotDefaultValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue: string;
}
