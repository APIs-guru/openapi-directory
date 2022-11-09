import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogDestination } from "./logdestination";
import { LogLevelEnum } from "./loglevelenum";


// LoggingConfiguration
/** 
 * The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.LogDestination })
  destinations?: LogDestination[];

  @Metadata({ data: "json, name=includeExecutionData" })
  includeExecutionData?: boolean;

  @Metadata({ data: "json, name=level" })
  level?: LogLevelEnum;
}
