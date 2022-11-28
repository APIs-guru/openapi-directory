import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotDefaultValue } from "./slotdefaultvalue";



// SlotDefaultValueSpecification
/** 
 * Defines a list of values that Amazon Lex should use as the default value for a slot.
**/
export class SlotDefaultValueSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValueList", elemType: SlotDefaultValue })
  defaultValueList: SlotDefaultValue[];
}
