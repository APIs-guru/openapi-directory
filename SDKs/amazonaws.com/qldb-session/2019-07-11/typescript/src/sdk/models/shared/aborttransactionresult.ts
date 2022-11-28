import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimingInformation } from "./timinginformation";



// AbortTransactionResult
/** 
 * Contains the details of the aborted transaction.
**/
export class AbortTransactionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
