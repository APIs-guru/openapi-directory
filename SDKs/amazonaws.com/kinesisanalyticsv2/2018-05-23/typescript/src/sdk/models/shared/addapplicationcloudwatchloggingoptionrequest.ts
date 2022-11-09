import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";


export class AddApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CloudWatchLoggingOption" })
  cloudWatchLoggingOption: CloudWatchLoggingOption;

  @Metadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;
}
