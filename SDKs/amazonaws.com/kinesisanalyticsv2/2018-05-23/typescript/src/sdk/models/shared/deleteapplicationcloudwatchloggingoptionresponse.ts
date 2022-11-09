import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";


export class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @Metadata({ data: "json, name=CloudWatchLoggingOptionDescriptions", elemType: shared.CloudWatchLoggingOptionDescription })
  cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}
