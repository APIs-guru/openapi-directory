import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlotValueRegexFilter
/** 
 * Provides a regular expression used to validate the value of a slot.
**/
export class SlotValueRegexFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=pattern" })
  pattern: string;
}
