import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationConfigurationUpdate } from "./applicationconfigurationupdate";
import { CloudWatchLoggingOptionUpdate } from "./cloudwatchloggingoptionupdate";
import { RunConfigurationUpdate } from "./runconfigurationupdate";



export class UpdateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationConfigurationUpdate" })
  applicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionUpdates", elemType: CloudWatchLoggingOptionUpdate })
  cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  @SpeakeasyMetadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=RunConfigurationUpdate" })
  runConfigurationUpdate?: RunConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=ServiceExecutionRoleUpdate" })
  serviceExecutionRoleUpdate?: string;
}
