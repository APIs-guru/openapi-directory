import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";



export class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionDescriptions", elemType: CloudWatchLoggingOptionDescription })
  cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}
