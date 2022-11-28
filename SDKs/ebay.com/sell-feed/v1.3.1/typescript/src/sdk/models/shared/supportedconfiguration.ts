import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportedConfiguration
/** 
 * An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value.
**/
export class SupportedConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: string;
}
