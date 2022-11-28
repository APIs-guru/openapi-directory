import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortForwardingConfig } from "./portforwardingconfig";



// LaunchConfig
/** 
 * Information about a launch configuration.
**/
export class LaunchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchFile" })
  launchFile: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName: string;

  @SpeakeasyMetadata({ data: "json, name=portForwardingConfig" })
  portForwardingConfig?: PortForwardingConfig;

  @SpeakeasyMetadata({ data: "json, name=streamUI" })
  streamUi?: boolean;
}
