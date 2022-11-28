import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchConfig } from "./launchconfig";
import { Tool } from "./tool";
import { UploadConfiguration } from "./uploadconfiguration";
import { WorldConfig } from "./worldconfig";
/**
 * Information about a simulation application configuration.
**/
export declare class SimulationApplicationConfig extends SpeakeasyBase {
    application: string;
    applicationVersion?: string;
    launchConfig: LaunchConfig;
    tools?: Tool[];
    uploadConfigurations?: UploadConfiguration[];
    useDefaultTools?: boolean;
    useDefaultUploadConfigurations?: boolean;
    worldConfigs?: WorldConfig[];
}
