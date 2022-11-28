import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { PayoutInstrument } from "./payoutinstrument";



// Payout
/** 
 * This type is used to express the details of one seller payout that is returned with the getPayout or getPayouts methods.
**/
export class Payout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=bankReference" })
  bankReference?: string;

  @SpeakeasyMetadata({ data: "json, name=lastAttemptedPayoutDate" })
  lastAttemptedPayoutDate?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutDate" })
  payoutDate?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutInstrument" })
  payoutInstrument?: PayoutInstrument;

  @SpeakeasyMetadata({ data: "json, name=payoutMemo" })
  payoutMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutStatus" })
  payoutStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutStatusDescription" })
  payoutStatusDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionCount" })
  transactionCount?: number;
}
