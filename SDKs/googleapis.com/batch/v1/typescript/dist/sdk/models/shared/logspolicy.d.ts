import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LogsPolicyDestinationEnum {
    DestinationUnspecified = "DESTINATION_UNSPECIFIED",
    CloudLogging = "CLOUD_LOGGING",
    Path = "PATH"
}
/**
 * LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
**/
export declare class LogsPolicy extends SpeakeasyBase {
    destination?: LogsPolicyDestinationEnum;
    logsPath?: string;
}
