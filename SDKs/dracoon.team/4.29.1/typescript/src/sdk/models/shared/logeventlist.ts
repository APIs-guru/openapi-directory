import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogEvent } from "./logevent";
import { Range } from "./range";



// LogEventList
/** 
 * List of log events
**/
export class LogEventList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: LogEvent })
  items: LogEvent[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
