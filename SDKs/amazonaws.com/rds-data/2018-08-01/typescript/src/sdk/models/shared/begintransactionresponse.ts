import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BeginTransactionResponse
/** 
 * The response elements represent the output of a request to start a SQL transaction.
**/
export class BeginTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
