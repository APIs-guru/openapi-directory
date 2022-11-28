import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationErrorDetails } from "./configurationerrordetails";
import { ConfigurationStateEnum } from "./configurationstateenum";



// ConfigurationStatus
/** 
 * Contains current status information for the configuration.
**/
export class ConfigurationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ConfigurationErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ConfigurationStateEnum;
}
