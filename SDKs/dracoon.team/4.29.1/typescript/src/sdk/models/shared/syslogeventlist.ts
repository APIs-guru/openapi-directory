import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SyslogEvent } from "./syslogevent";
import { Range } from "./range";


// SyslogEventList
/** 
 * List of syslog events
**/
export class SyslogEventList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SyslogEvent })
  items: SyslogEvent[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
