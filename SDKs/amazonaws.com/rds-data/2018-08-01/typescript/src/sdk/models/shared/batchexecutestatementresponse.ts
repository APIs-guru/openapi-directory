import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateResult } from "./updateresult";


// BatchExecuteStatementResponse
/** 
 * The response elements represent the output of a SQL statement over an array of data.
**/
export class BatchExecuteStatementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateResults", elemType: shared.UpdateResult })
  updateResults?: UpdateResult[];
}
