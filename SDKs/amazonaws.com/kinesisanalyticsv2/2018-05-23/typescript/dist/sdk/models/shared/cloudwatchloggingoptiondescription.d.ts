import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the Amazon CloudWatch logging option.
**/
export declare class CloudWatchLoggingOptionDescription extends SpeakeasyBase {
    cloudWatchLoggingOptionId?: string;
    logStreamArn: string;
    roleArn?: string;
}
