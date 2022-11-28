import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationErrorDetails } from "./configurationerrordetails";
import { ConfigurationStateEnum } from "./configurationstateenum";
/**
 * Contains current status information for the configuration.
**/
export declare class ConfigurationStatus extends SpeakeasyBase {
    error?: ConfigurationErrorDetails;
    state: ConfigurationStateEnum;
}
