import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";
import { InfoFromBuyer } from "./infofrombuyer";
import { DisputeEvidence } from "./disputeevidence";
import { EvidenceRequest } from "./evidencerequest";
import { OrderLineItems } from "./orderlineitems";
import { MonetaryTransaction } from "./monetarytransaction";
import { PaymentDisputeOutcomeDetail } from "./paymentdisputeoutcomedetail";
import { ReturnAddress } from "./returnaddress";



// PaymentDispute
/** 
 * This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
**/
export class PaymentDispute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: SimpleAmount;

  @SpeakeasyMetadata({ data: "json, name=availableChoices" })
  availableChoices?: string[];

  @SpeakeasyMetadata({ data: "json, name=buyerProvided" })
  buyerProvided?: InfoFromBuyer;

  @SpeakeasyMetadata({ data: "json, name=buyerUsername" })
  buyerUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=closedDate" })
  closedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=evidence", elemType: DisputeEvidence })
  evidence?: DisputeEvidence[];

  @SpeakeasyMetadata({ data: "json, name=evidenceRequests", elemType: EvidenceRequest })
  evidenceRequests?: EvidenceRequest[];

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItems })
  lineItems?: OrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=monetaryTransactions", elemType: MonetaryTransaction })
  monetaryTransactions?: MonetaryTransaction[];

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

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: PaymentDisputeOutcomeDetail;

  @SpeakeasyMetadata({ data: "json, name=respondByDate" })
  respondByDate?: string;

  @SpeakeasyMetadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=sellerResponse" })
  sellerResponse?: string;
}
