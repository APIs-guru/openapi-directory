import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyslogEvent } from "./syslogevent";
import { Range } from "./range";



// SyslogEventList
/** 
 * List of syslog events
**/
export class SyslogEventList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SyslogEvent })
  items: SyslogEvent[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
