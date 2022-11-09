import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RollbackTransactionResponse
/** 
 * The response elements represent the output of a request to perform a rollback of a transaction.
**/
export class RollbackTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus?: string;
}
