import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoggingConfiguration
/** 
 * Consists of the logging role and the log group name.
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;
}
