import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The settings for delivering connector logs to Amazon CloudWatch Logs.
**/
export declare class CloudWatchLogsLogDelivery extends SpeakeasyBase {
    enabled: boolean;
    logGroup?: string;
}
