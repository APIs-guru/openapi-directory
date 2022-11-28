import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentDisputeSummary } from "./paymentdisputesummary";



// DisputeSummaryResponse
/** 
 * This type defines the base response payload of the getPaymentDisputeSummaries method. Each payment dispute that matches the input criteria is returned under the paymentDisputeSummaries array.
**/
export class DisputeSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentDisputeSummaries", elemType: PaymentDisputeSummary })
  paymentDisputeSummaries?: PaymentDisputeSummary[];

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
