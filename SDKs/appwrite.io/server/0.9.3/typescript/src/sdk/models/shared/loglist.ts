import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Log } from "./log";



// LogList
/** 
 * Logs List
**/
export class LogList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logs", elemType: Log })
  logs: Log[];
}
