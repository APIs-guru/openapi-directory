import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisputeAmount } from "./disputeamount";



// MonetaryTransaction
/** 
 * This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
**/
export class MonetaryTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: DisputeAmount;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
