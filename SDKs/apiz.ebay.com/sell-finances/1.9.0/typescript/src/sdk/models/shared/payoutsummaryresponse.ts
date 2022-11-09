import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// PayoutSummaryResponse
/** 
 * This type is the base response type of the getPayoutSummary method, and contains the total count of seller payouts (that match the input criteria), the total count of monetary transactions (order payment, buyer refunds, or seller credits) associated with those payouts, and the total value of those seller payouts.
**/
export class PayoutSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=payoutCount" })
  payoutCount?: number;

  @Metadata({ data: "json, name=transactionCount" })
  transactionCount?: number;
}
