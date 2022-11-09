import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValueHolder } from "./valueholder";


// ExecuteStatementRequest
/** 
 * Specifies a request to execute a statement.
**/
export class ExecuteStatementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Parameters", elemType: shared.ValueHolder })
  parameters?: ValueHolder[];

  @Metadata({ data: "json, name=Statement" })
  statement: string;

  @Metadata({ data: "json, name=TransactionId" })
  transactionId: string;
}
