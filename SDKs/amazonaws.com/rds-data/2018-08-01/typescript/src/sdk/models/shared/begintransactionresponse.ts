import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BeginTransactionResponse
/** 
 * The response elements represent the output of a request to start a SQL transaction.
**/
export class BeginTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
