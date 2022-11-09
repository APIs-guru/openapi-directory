import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingLevelEnum } from "./logginglevelenum";


// LoggingOptions
/** 
 * Contains logging options.
**/
export class LoggingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level: LoggingLevelEnum;
}
