import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommitTransactionRequest
/** 
 * Contains the details of the transaction to commit.
**/
export class CommitTransactionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommitDigest" })
  commitDigest: string;

  @Metadata({ data: "json, name=TransactionId" })
  transactionId: string;
}
