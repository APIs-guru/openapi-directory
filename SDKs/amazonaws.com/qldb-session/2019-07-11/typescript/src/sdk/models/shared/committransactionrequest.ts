import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommitTransactionRequest
/** 
 * Contains the details of the transaction to commit.
**/
export class CommitTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommitDigest" })
  commitDigest: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId: string;
}
