import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SlotDefaultValue } from "./slotdefaultvalue";


// SlotDefaultValueSpec
/** 
 * Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.
**/
export class SlotDefaultValueSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValueList", elemType: shared.SlotDefaultValue })
  defaultValueList: SlotDefaultValue[];
}
