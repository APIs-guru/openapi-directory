import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Log } from "./log";


// LogList
/** 
 * Logs List
**/
export class LogList extends SpeakeasyBase {
  @Metadata({ data: "json, name=logs", elemType: shared.Log })
  logs: Log[];
}
