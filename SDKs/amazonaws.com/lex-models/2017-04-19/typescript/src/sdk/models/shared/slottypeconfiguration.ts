import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeRegexConfiguration } from "./slottyperegexconfiguration";



// SlotTypeConfiguration
/** 
 * Provides configuration information for a slot type.
**/
export class SlotTypeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regexConfiguration" })
  regexConfiguration?: SlotTypeRegexConfiguration;
}
