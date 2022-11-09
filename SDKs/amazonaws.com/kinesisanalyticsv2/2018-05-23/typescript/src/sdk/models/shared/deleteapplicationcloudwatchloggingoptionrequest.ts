import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CloudWatchLoggingOptionId" })
  cloudWatchLoggingOptionId: string;

  @Metadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;
}
