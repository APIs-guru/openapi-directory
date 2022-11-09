import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PortForwardingConfig } from "./portforwardingconfig";
/**
 * Information about a launch configuration.
**/
export declare class LaunchConfig extends SpeakeasyBase {
    environmentVariables?: Map<string, string>;
    launchFile: string;
    packageName: string;
    portForwardingConfig?: PortForwardingConfig;
    streamUi?: boolean;
}
