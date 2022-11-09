import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimingInformation } from "./timinginformation";


// AbortTransactionResult
/** 
 * Contains the details of the aborted transaction.
**/
export class AbortTransactionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
