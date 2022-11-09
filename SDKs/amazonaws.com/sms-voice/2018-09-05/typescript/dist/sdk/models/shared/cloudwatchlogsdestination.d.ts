import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
**/
export declare class CloudWatchLogsDestination extends SpeakeasyBase {
    iamRoleArn?: string;
    logGroupArn?: string;
}
