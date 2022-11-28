import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommitTransactionResponse
/** 
 * The response elements represent the output of a commit transaction request.
**/
export class CommitTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus?: string;
}
