import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes CloudWatch logging option updates.
**/
export declare class CloudWatchLoggingOptionUpdate extends SpeakeasyBase {
    cloudWatchLoggingOptionId: string;
    logStreamArnUpdate?: string;
    roleArnUpdate?: string;
}
