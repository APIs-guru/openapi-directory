import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
**/
export declare class CloudWatchLogGroupLogDestination extends SpeakeasyBase {
    cloudWatchLogGroupArn: string;
    logPrefix: string;
}
