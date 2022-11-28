import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlotValueRegexFilter
/** 
 * Provides a regular expression used to validate the value of a slot.
**/
export class SlotValueRegexFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern: string;
}
