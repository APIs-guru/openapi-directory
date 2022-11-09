import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogOperation } from "./logoperation";


// LogOperationList
/** 
 * List of log operations
**/
export class LogOperationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationList", elemType: shared.LogOperation })
  operationList: LogOperation[];
}
