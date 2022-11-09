import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationConfigurationUpdate } from "./applicationconfigurationupdate";
import { CloudWatchLoggingOptionUpdate } from "./cloudwatchloggingoptionupdate";
import { RunConfigurationUpdate } from "./runconfigurationupdate";


export class UpdateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationConfigurationUpdate" })
  applicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CloudWatchLoggingOptionUpdates", elemType: shared.CloudWatchLoggingOptionUpdate })
  cloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  @Metadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;

  @Metadata({ data: "json, name=RunConfigurationUpdate" })
  runConfigurationUpdate?: RunConfigurationUpdate;

  @Metadata({ data: "json, name=ServiceExecutionRoleUpdate" })
  serviceExecutionRoleUpdate?: string;
}
