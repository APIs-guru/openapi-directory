import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimingInformation } from "./timinginformation";



// StartTransactionResult
/** 
 * Contains the details of the started transaction.
**/
export class StartTransactionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;

  @SpeakeasyMetadata({ data: "json, name=TransactionId" })
  transactionId?: string;
}
