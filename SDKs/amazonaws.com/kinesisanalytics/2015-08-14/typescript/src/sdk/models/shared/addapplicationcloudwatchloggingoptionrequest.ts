import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";



export class AddApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOption" })
  cloudWatchLoggingOption: CloudWatchLoggingOption;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;
}
