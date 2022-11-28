import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchConfig } from "./launchconfig";
import { Tool } from "./tool";
import { UploadConfiguration } from "./uploadconfiguration";
/**
 * Application configuration information for a robot.
**/
export declare class RobotApplicationConfig extends SpeakeasyBase {
    application: string;
    applicationVersion?: string;
    launchConfig: LaunchConfig;
    tools?: Tool[];
    uploadConfigurations?: UploadConfiguration[];
    useDefaultTools?: boolean;
    useDefaultUploadConfigurations?: boolean;
}
