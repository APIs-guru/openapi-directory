import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOptionDescription } from "./cloudwatchloggingoptiondescription";
export declare class AddApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
    applicationArn?: string;
    applicationVersionId?: number;
    cloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}
