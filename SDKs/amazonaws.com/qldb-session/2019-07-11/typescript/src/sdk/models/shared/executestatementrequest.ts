import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueHolder } from "./valueholder";



// ExecuteStatementRequest
/** 
 * Specifies a request to execute a statement.
**/
export class ExecuteStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: ValueHolder })
  parameters?: ValueHolder[];

  @SpeakeasyMetadata({ data: "json, name=Statement" })
  statement: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId: string;
}
