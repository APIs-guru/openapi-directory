import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerGroupLaunchConfiguration } from "./servergrouplaunchconfiguration";
export declare class PutAppLaunchConfigurationRequest extends SpeakeasyBase {
    appId?: string;
    autoLaunch?: boolean;
    roleName?: string;
    serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}
