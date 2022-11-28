import { SpeakeasyBase } from "../../../internal/utils";
import { ValueHolder } from "./valueholder";
/**
 * Specifies a request to execute a statement.
**/
export declare class ExecuteStatementRequest extends SpeakeasyBase {
    parameters?: ValueHolder[];
    statement: string;
    transactionId: string;
}
