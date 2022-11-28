import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingLevelEnum } from "./logginglevelenum";



// LoggingOptions
/** 
 * Contains logging options.
**/
export class LoggingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level: LoggingLevelEnum;
}
