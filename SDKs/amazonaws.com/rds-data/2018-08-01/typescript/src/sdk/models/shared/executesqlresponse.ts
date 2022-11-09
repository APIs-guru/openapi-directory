import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlStatementResult } from "./sqlstatementresult";


// ExecuteSqlResponse
/** 
 * The response elements represent the output of a request to run one or more SQL statements.
**/
export class ExecuteSqlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=sqlStatementResults", elemType: shared.SqlStatementResult })
  sqlStatementResults?: SqlStatementResult[];
}
