import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogDestination } from "./logdestination";
import { LogLevelEnum } from "./loglevelenum";



// LoggingConfiguration
/** 
 * The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: LogDestination })
  destinations?: LogDestination[];

  @SpeakeasyMetadata({ data: "json, name=includeExecutionData" })
  includeExecutionData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: LogLevelEnum;
}
