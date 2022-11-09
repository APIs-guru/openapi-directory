import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
export declare class AddApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
    applicationName: string;
    cloudWatchLoggingOption: CloudWatchLoggingOption;
    conditionalToken?: string;
    currentApplicationVersionId?: number;
}
