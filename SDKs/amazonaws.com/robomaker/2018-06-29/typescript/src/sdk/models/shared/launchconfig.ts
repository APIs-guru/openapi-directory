import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortForwardingConfig } from "./portforwardingconfig";


// LaunchConfig
/** 
 * Information about a launch configuration.
**/
export class LaunchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=launchFile" })
  launchFile: string;

  @Metadata({ data: "json, name=packageName" })
  packageName: string;

  @Metadata({ data: "json, name=portForwardingConfig" })
  portForwardingConfig?: PortForwardingConfig;

  @Metadata({ data: "json, name=streamUI" })
  streamUi?: boolean;
}
