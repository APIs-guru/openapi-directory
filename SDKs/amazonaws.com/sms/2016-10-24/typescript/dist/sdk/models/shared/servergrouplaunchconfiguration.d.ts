import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerLaunchConfiguration } from "./serverlaunchconfiguration";
/**
 * Launch configuration for a server group.
**/
export declare class ServerGroupLaunchConfiguration extends SpeakeasyBase {
    launchOrder?: number;
    serverGroupId?: string;
    serverLaunchConfigurations?: ServerLaunchConfiguration[];
}
