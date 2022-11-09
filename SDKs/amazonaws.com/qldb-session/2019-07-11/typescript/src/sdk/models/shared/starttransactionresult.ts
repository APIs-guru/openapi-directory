import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimingInformation } from "./timinginformation";


// StartTransactionResult
/** 
 * Contains the details of the started transaction.
**/
export class StartTransactionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;

  @Metadata({ data: "json, name=TransactionId" })
  transactionId?: string;
}
