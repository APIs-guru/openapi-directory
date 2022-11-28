import { SpeakeasyBase } from "../../../internal/utils";
import { SyslogEvent } from "./syslogevent";
import { Range } from "./range";
/**
 * List of syslog events
**/
export declare class SyslogEventList extends SpeakeasyBase {
    items: SyslogEvent[];
    range: Range;
}
