import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateResult } from "./updateresult";



// BatchExecuteStatementResponse
/** 
 * The response elements represent the output of a SQL statement over an array of data.
**/
export class BatchExecuteStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateResults", elemType: UpdateResult })
  updateResults?: UpdateResult[];
}
