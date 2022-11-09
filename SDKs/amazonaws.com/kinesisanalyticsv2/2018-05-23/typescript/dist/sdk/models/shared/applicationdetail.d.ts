import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationConfigurationDescription } from "./applicationconfigurationdescription";
import { ApplicationMaintenanceConfigurationDescription } from "./applicationmaintenanceconfigurationdescription";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";
/**
 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
**/
export declare class ApplicationDetail extends SpeakeasyBase {
    applicationArn: string;
    applicationConfigurationDescription?: ApplicationConfigurationDescription;
    applicationDescription?: string;
    applicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
    applicationMode?: ApplicationModeEnum;
    applicationName: string;
    applicationStatus: ApplicationStatusEnum;
    applicationVersionId: number;
    applicationVersionRolledBackFrom?: number;
    applicationVersionRolledBackTo?: number;
    applicationVersionUpdatedFrom?: number;
    cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
    conditionalToken?: string;
    createTimestamp?: Date;
    lastUpdateTimestamp?: Date;
    runtimeEnvironment: RuntimeEnvironmentEnum;
    serviceExecutionRole?: string;
}
