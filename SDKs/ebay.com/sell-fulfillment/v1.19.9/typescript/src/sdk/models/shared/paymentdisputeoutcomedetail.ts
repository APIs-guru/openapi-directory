import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";



// PaymentDisputeOutcomeDetail
/** 
 * This type is used by the resolution container that is returned for payment disputes that have been resolved.
**/
export class PaymentDisputeOutcomeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: SimpleAmount;

  @SpeakeasyMetadata({ data: "json, name=protectedAmount" })
  protectedAmount?: SimpleAmount;

  @SpeakeasyMetadata({ data: "json, name=protectionStatus" })
  protectionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonForClosure" })
  reasonForClosure?: string;

  @SpeakeasyMetadata({ data: "json, name=recoupAmount" })
  recoupAmount?: SimpleAmount;

  @SpeakeasyMetadata({ data: "json, name=totalFeeCredit" })
  totalFeeCredit?: SimpleAmount;
}
