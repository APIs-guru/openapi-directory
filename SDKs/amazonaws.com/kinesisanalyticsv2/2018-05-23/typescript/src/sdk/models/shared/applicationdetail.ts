import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationConfigurationDescription } from "./applicationconfigurationdescription";
import { ApplicationMaintenanceConfigurationDescription } from "./applicationmaintenanceconfigurationdescription";
import { ApplicationModeEnum } from "./applicationmodeenum";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";
import { RuntimeEnvironmentEnum } from "./runtimeenvironmentenum";



// ApplicationDetail
/** 
 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
**/
export class ApplicationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationConfigurationDescription" })
  applicationConfigurationDescription?: ApplicationConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationMaintenanceConfigurationDescription" })
  applicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=ApplicationMode" })
  applicationMode?: ApplicationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionRolledBackFrom" })
  applicationVersionRolledBackFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionRolledBackTo" })
  applicationVersionRolledBackTo?: number;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionUpdatedFrom" })
  applicationVersionUpdatedFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionDescriptions", elemType: CloudWatchLoggingOptionDescription })
  cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  @SpeakeasyMetadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=RuntimeEnvironment" })
  runtimeEnvironment: RuntimeEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceExecutionRole" })
  serviceExecutionRole?: string;
}
