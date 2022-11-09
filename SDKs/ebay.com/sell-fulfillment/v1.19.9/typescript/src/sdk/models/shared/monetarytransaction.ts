import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DisputeAmount } from "./disputeamount";


// MonetaryTransaction
/** 
 * This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
**/
export class MonetaryTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: DisputeAmount;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
