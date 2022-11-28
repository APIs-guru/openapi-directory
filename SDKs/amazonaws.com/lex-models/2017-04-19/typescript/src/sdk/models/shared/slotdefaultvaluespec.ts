import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotDefaultValue } from "./slotdefaultvalue";



// SlotDefaultValueSpec
/** 
 * Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.
**/
export class SlotDefaultValueSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValueList", elemType: SlotDefaultValue })
  defaultValueList: SlotDefaultValue[];
}
