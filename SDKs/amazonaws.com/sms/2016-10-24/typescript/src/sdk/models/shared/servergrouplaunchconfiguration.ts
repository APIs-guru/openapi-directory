import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerLaunchConfiguration } from "./serverlaunchconfiguration";



// ServerGroupLaunchConfiguration
/** 
 * Launch configuration for a server group.
**/
export class ServerGroupLaunchConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchOrder" })
  launchOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=serverLaunchConfigurations", elemType: ServerLaunchConfiguration })
  serverLaunchConfigurations?: ServerLaunchConfiguration[];
}
