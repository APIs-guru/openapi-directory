import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration options for sending command output to Amazon CloudWatch Logs.
**/
export declare class CloudWatchOutputConfig extends SpeakeasyBase {
    cloudWatchLogGroupName?: string;
    cloudWatchOutputEnabled?: boolean;
}
