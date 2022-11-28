import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlotTypeRegexConfiguration
/** 
 * Provides a regular expression used to validate the value of a slot.
**/
export class SlotTypeRegexConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern: string;
}
