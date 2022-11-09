import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SlotDefaultValue } from "./slotdefaultvalue";


// SlotDefaultValueSpecification
/** 
 * Defines a list of values that Amazon Lex should use as the default value for a slot.
**/
export class SlotDefaultValueSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValueList", elemType: shared.SlotDefaultValue })
  defaultValueList: SlotDefaultValue[];
}
