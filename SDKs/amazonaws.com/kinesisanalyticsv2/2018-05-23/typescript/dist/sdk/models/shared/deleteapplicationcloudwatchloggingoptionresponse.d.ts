import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";
export declare class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
    applicationArn?: string;
    applicationVersionId?: number;
    cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}
