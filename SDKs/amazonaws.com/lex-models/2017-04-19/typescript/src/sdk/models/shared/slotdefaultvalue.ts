import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlotDefaultValue
/** 
 * A default value for a slot.
**/
export class SlotDefaultValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue: string;
}
