import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlotTypeRegexConfiguration
/** 
 * Provides a regular expression used to validate the value of a slot.
**/
export class SlotTypeRegexConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=pattern" })
  pattern: string;
}
