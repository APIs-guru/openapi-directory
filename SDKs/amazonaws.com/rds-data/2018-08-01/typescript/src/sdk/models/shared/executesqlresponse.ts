import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlStatementResult } from "./sqlstatementresult";



// ExecuteSqlResponse
/** 
 * The response elements represent the output of a request to run one or more SQL statements.
**/
export class ExecuteSqlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sqlStatementResults", elemType: SqlStatementResult })
  sqlStatementResults?: SqlStatementResult[];
}
