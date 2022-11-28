import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogGroupLogDestination } from "./cloudwatchloggrouplogdestination";
/**
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
**/
export declare class TextLogDestination extends SpeakeasyBase {
    cloudWatch: CloudWatchLogGroupLogDestination;
}
