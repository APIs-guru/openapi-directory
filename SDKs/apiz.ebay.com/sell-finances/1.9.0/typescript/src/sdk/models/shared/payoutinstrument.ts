import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayoutInstrument
/** 
 * This type provides details about the seller's account that received (or is scheduled to receive) a payout.
**/
export class PayoutInstrument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountLastFourDigits" })
  accountLastFourDigits?: string;

  @SpeakeasyMetadata({ data: "json, name=instrumentType" })
  instrumentType?: string;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;
}
