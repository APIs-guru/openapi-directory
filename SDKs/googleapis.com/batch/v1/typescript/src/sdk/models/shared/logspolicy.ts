import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LogsPolicyDestinationEnum {
    DestinationUnspecified = "DESTINATION_UNSPECIFIED",
    CloudLogging = "CLOUD_LOGGING",
    Path = "PATH"
}


// LogsPolicy
/** 
 * LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
**/
export class LogsPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: LogsPolicyDestinationEnum;

  @SpeakeasyMetadata({ data: "json, name=logsPath" })
  logsPath?: string;
}
