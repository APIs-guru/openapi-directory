import { SpeakeasyBase } from "../../../internal/utils";
import { SlotDefaultValue } from "./slotdefaultvalue";
/**
 * Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.
**/
export declare class SlotDefaultValueSpec extends SpeakeasyBase {
    defaultValueList: SlotDefaultValue[];
}
