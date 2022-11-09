import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerLaunchConfiguration } from "./serverlaunchconfiguration";


// ServerGroupLaunchConfiguration
/** 
 * Launch configuration for a server group.
**/
export class ServerGroupLaunchConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchOrder" })
  launchOrder?: number;

  @Metadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @Metadata({ data: "json, name=serverLaunchConfigurations", elemType: shared.ServerLaunchConfiguration })
  serverLaunchConfigurations?: ServerLaunchConfiguration[];
}
