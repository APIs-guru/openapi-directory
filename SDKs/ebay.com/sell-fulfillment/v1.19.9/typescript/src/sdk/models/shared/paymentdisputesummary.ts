import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleAmount } from "./simpleamount";


// PaymentDisputeSummary
/** 
 * This type is used by each payment dispute that is returned with the getPaymentDisputeSummaries method.
**/
export class PaymentDisputeSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: SimpleAmount;

  @Metadata({ data: "json, name=buyerUsername" })
  buyerUsername?: string;

  @Metadata({ data: "json, name=closedDate" })
  closedDate?: string;

  @Metadata({ data: "json, name=openDate" })
  openDate?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=paymentDisputeId" })
  paymentDisputeId?: string;

  @Metadata({ data: "json, name=paymentDisputeStatus" })
  paymentDisputeStatus?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=respondByDate" })
  respondByDate?: string;
}
