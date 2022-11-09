import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration information for a deployment launch.
**/
export declare class DeploymentLaunchConfig extends SpeakeasyBase {
    environmentVariables?: Map<string, string>;
    launchFile: string;
    packageName: string;
    postLaunchFile?: string;
    preLaunchFile?: string;
}
