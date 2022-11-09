import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn: string;

  @Metadata({ data: "json, name=ApplicationConfigurationDescription" })
  applicationConfigurationDescription?: ApplicationConfigurationDescription;

  @Metadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @Metadata({ data: "json, name=ApplicationMaintenanceConfigurationDescription" })
  applicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;

  @Metadata({ data: "json, name=ApplicationMode" })
  applicationMode?: ApplicationModeEnum;

  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=ApplicationStatus" })
  applicationStatus: ApplicationStatusEnum;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @Metadata({ data: "json, name=ApplicationVersionRolledBackFrom" })
  applicationVersionRolledBackFrom?: number;

  @Metadata({ data: "json, name=ApplicationVersionRolledBackTo" })
  applicationVersionRolledBackTo?: number;

  @Metadata({ data: "json, name=ApplicationVersionUpdatedFrom" })
  applicationVersionUpdatedFrom?: number;

  @Metadata({ data: "json, name=CloudWatchLoggingOptionDescriptions", elemType: shared.CloudWatchLoggingOptionDescription })
  cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  @Metadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @Metadata({ data: "json, name=CreateTimestamp" })
  createTimestamp?: Date;

  @Metadata({ data: "json, name=LastUpdateTimestamp" })
  lastUpdateTimestamp?: Date;

  @Metadata({ data: "json, name=RuntimeEnvironment" })
  runtimeEnvironment: RuntimeEnvironmentEnum;

  @Metadata({ data: "json, name=ServiceExecutionRole" })
  serviceExecutionRole?: string;
}
