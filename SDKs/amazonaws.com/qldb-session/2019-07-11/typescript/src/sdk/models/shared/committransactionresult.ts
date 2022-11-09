import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IoUsage } from "./iousage";
import { TimingInformation } from "./timinginformation";


// CommitTransactionResult
/** 
 * Contains the details of the committed transaction.
**/
export class CommitTransactionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommitDigest" })
  commitDigest?: string;

  @Metadata({ data: "json, name=ConsumedIOs" })
  consumedIOs?: IoUsage;

  @Metadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;

  @Metadata({ data: "json, name=TransactionId" })
  transactionId?: string;
}
