import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlotTypeRegexConfiguration } from "./slottyperegexconfiguration";


// SlotTypeConfiguration
/** 
 * Provides configuration information for a slot type.
**/
export class SlotTypeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=regexConfiguration" })
  regexConfiguration?: SlotTypeRegexConfiguration;
}
