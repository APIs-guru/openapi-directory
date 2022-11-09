import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=amount" })
  amount?: SimpleAmount;

  @Metadata({ data: "json, name=availableChoices" })
  availableChoices?: string[];

  @Metadata({ data: "json, name=buyerProvided" })
  buyerProvided?: InfoFromBuyer;

  @Metadata({ data: "json, name=buyerUsername" })
  buyerUsername?: string;

  @Metadata({ data: "json, name=closedDate" })
  closedDate?: string;

  @Metadata({ data: "json, name=evidence", elemType: shared.DisputeEvidence })
  evidence?: DisputeEvidence[];

  @Metadata({ data: "json, name=evidenceRequests", elemType: shared.EvidenceRequest })
  evidenceRequests?: EvidenceRequest[];

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderLineItems })
  lineItems?: OrderLineItems[];

  @Metadata({ data: "json, name=monetaryTransactions", elemType: shared.MonetaryTransaction })
  monetaryTransactions?: MonetaryTransaction[];

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

  @Metadata({ data: "json, name=resolution" })
  resolution?: PaymentDisputeOutcomeDetail;

  @Metadata({ data: "json, name=respondByDate" })
  respondByDate?: string;

  @Metadata({ data: "json, name=returnAddress" })
  returnAddress?: ReturnAddress;

  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=sellerResponse" })
  sellerResponse?: string;
}
