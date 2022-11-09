import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationErrorDetails } from "./configurationerrordetails";
import { ConfigurationStateEnum } from "./configurationstateenum";


// ConfigurationStatus
/** 
 * Contains current status information for the configuration.
**/
export class ConfigurationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ConfigurationErrorDetails;

  @Metadata({ data: "json, name=state" })
  state: ConfigurationStateEnum;
}
