import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoUsage } from "./iousage";
import { TimingInformation } from "./timinginformation";



// CommitTransactionResult
/** 
 * Contains the details of the committed transaction.
**/
export class CommitTransactionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommitDigest" })
  commitDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumedIOs" })
  consumedIOs?: IoUsage;

  @SpeakeasyMetadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId?: string;
}
