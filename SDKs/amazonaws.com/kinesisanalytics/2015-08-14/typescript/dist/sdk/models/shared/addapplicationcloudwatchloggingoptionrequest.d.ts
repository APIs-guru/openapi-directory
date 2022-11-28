import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
export declare class AddApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
    applicationName: string;
    cloudWatchLoggingOption: CloudWatchLoggingOption;
    currentApplicationVersionId: number;
}
