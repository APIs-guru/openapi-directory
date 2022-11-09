import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoggingConfiguration
/** 
 * Consists of the logging role and the log group name.
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogGroupName" })
  logGroupName?: string;

  @Metadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;
}
