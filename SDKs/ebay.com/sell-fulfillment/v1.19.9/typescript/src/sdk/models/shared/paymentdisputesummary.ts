import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";



// PaymentDisputeSummary
/** 
 * This type is used by each payment dispute that is returned with the getPaymentDisputeSummaries method.
**/
export class PaymentDisputeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: SimpleAmount;

  @SpeakeasyMetadata({ data: "json, name=buyerUsername" })
  buyerUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=closedDate" })
  closedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=openDate" })
  openDate?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDisputeId" })
  paymentDisputeId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDisputeStatus" })
  paymentDisputeStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=respondByDate" })
  respondByDate?: string;
}
