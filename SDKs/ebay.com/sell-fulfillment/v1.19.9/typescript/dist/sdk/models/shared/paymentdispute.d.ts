import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";
import { InfoFromBuyer } from "./infofrombuyer";
import { DisputeEvidence } from "./disputeevidence";
import { EvidenceRequest } from "./evidencerequest";
import { OrderLineItems } from "./orderlineitems";
import { MonetaryTransaction } from "./monetarytransaction";
import { PaymentDisputeOutcomeDetail } from "./paymentdisputeoutcomedetail";
import { ReturnAddress } from "./returnaddress";
/**
 * This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
**/
export declare class PaymentDispute extends SpeakeasyBase {
    amount?: SimpleAmount;
    availableChoices?: string[];
    buyerProvided?: InfoFromBuyer;
    buyerUsername?: string;
    closedDate?: string;
    evidence?: DisputeEvidence[];
    evidenceRequests?: EvidenceRequest[];
    lineItems?: OrderLineItems[];
    monetaryTransactions?: MonetaryTransaction[];
    openDate?: string;
    orderId?: string;
    paymentDisputeId?: string;
    paymentDisputeStatus?: string;
    reason?: string;
    resolution?: PaymentDisputeOutcomeDetail;
    respondByDate?: string;
    returnAddress?: ReturnAddress;
    revision?: number;
    sellerResponse?: string;
}
