import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogEvent } from "./logevent";
import { Range } from "./range";


// LogEventList
/** 
 * List of log events
**/
export class LogEventList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.LogEvent })
  items: LogEvent[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
