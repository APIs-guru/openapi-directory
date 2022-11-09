import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommitTransactionResponse
/** 
 * The response elements represent the output of a commit transaction request.
**/
export class CommitTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus?: string;
}
