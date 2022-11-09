import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlotDefaultValue
/** 
 * Specifies the default value to use when a user doesn't provide a value for a slot.
**/
export class SlotDefaultValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue: string;
}
