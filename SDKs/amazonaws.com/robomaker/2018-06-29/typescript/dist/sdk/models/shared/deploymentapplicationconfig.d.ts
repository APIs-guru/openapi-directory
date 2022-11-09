import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentLaunchConfig } from "./deploymentlaunchconfig";
/**
 * Information about a deployment application configuration.
**/
export declare class DeploymentApplicationConfig extends SpeakeasyBase {
    application: string;
    applicationVersion: string;
    launchConfig: DeploymentLaunchConfig;
}
