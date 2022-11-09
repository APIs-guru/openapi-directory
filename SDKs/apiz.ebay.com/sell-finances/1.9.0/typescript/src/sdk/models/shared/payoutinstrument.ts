import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayoutInstrument
/** 
 * This type provides details about the seller's account that received (or is scheduled to receive) a payout.
**/
export class PayoutInstrument extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountLastFourDigits" })
  accountLastFourDigits?: string;

  @Metadata({ data: "json, name=instrumentType" })
  instrumentType?: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;
}
