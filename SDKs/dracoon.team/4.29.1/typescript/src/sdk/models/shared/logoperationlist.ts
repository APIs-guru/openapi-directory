import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogOperation } from "./logoperation";



// LogOperationList
/** 
 * List of log operations
**/
export class LogOperationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationList", elemType: LogOperation })
  operationList: LogOperation[];
}
