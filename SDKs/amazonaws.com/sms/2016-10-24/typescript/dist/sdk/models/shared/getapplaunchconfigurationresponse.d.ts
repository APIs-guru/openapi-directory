import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerGroupLaunchConfiguration } from "./servergrouplaunchconfiguration";
export declare class GetAppLaunchConfigurationResponse extends SpeakeasyBase {
    appId?: string;
    autoLaunch?: boolean;
    roleName?: string;
    serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}
