import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SupportedConfiguration
/** 
 * An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value.
**/
export class SupportedConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=property" })
  property?: string;

  @Metadata({ data: "json, name=usage" })
  usage?: string;
}
