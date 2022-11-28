import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackTransactionResponse
/** 
 * The response elements represent the output of a request to perform a rollback of a transaction.
**/
export class RollbackTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus?: string;
}
