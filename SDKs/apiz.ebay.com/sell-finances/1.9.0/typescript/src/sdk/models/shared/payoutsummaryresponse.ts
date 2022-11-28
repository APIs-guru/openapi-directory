import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// PayoutSummaryResponse
/** 
 * This type is the base response type of the getPayoutSummary method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts.
**/
export class PayoutSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=payoutCount" })
  payoutCount?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionCount" })
  transactionCount?: number;
}
