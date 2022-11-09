import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleAmount } from "./simpleamount";
import { SimpleAmount } from "./simpleamount";
import { SimpleAmount } from "./simpleamount";
import { SimpleAmount } from "./simpleamount";


// PaymentDisputeOutcomeDetail
/** 
 * This type is used by the resolution container that is returned for payment disputes that have been resolved.
**/
export class PaymentDisputeOutcomeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=fees" })
  fees?: SimpleAmount;

  @Metadata({ data: "json, name=protectedAmount" })
  protectedAmount?: SimpleAmount;

  @Metadata({ data: "json, name=protectionStatus" })
  protectionStatus?: string;

  @Metadata({ data: "json, name=reasonForClosure" })
  reasonForClosure?: string;

  @Metadata({ data: "json, name=recoupAmount" })
  recoupAmount?: SimpleAmount;

  @Metadata({ data: "json, name=totalFeeCredit" })
  totalFeeCredit?: SimpleAmount;
}
