import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
**/
export declare class InputLogEvent extends SpeakeasyBase {
    message: string;
    timestamp: number;
}
