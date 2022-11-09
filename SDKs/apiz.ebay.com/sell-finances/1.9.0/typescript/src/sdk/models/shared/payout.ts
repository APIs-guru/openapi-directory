import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { PayoutInstrument } from "./payoutinstrument";


// Payout
/** 
 * This type is used to express the details of one seller payout that is returned with the getPayout or getPayouts methods.
**/
export class Payout extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=bankReference" })
  bankReference?: string;

  @Metadata({ data: "json, name=lastAttemptedPayoutDate" })
  lastAttemptedPayoutDate?: string;

  @Metadata({ data: "json, name=payoutDate" })
  payoutDate?: string;

  @Metadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @Metadata({ data: "json, name=payoutInstrument" })
  payoutInstrument?: PayoutInstrument;

  @Metadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @Metadata({ data: "json, name=payoutStatus" })
  payoutStatus?: string;

  @Metadata({ data: "json, name=payoutStatusDescription" })
  payoutStatusDescription?: string;

  @Metadata({ data: "json, name=transactionCount" })
  transactionCount?: number;
}
