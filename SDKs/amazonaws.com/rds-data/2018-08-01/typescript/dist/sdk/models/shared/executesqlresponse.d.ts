import { SpeakeasyBase } from "../../../internal/utils";
import { SqlStatementResult } from "./sqlstatementresult";
/**
 * The response elements represent the output of a request to run one or more SQL statements.
**/
export declare class ExecuteSqlResponse extends SpeakeasyBase {
    sqlStatementResults?: SqlStatementResult[];
}
