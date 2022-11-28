import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { CancelStatus } from "./cancelstatus";
import { FulfillmentStartInstruction } from "./fulfillmentstartinstruction";
import { LineItem } from "./lineitem";
import { PaymentSummary } from "./paymentsummary";
import { PricingSummary } from "./pricingsummary";
import { Program } from "./program";
import { Amount } from "./amount";
/**
 * This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
**/
export declare class Order extends SpeakeasyBase {
    buyer?: Buyer;
    buyerCheckoutNotes?: string;
    cancelStatus?: CancelStatus;
    creationDate?: string;
    ebayCollectAndRemitTax?: boolean;
    fulfillmentHrefs?: string[];
    fulfillmentStartInstructions?: FulfillmentStartInstruction[];
    lastModifiedDate?: string;
    legacyOrderId?: string;
    lineItems?: LineItem[];
    orderFulfillmentStatus?: string;
    orderId?: string;
    orderPaymentStatus?: string;
    paymentSummary?: PaymentSummary;
    pricingSummary?: PricingSummary;
    program?: Program;
    salesRecordReference?: string;
    sellerId?: string;
    totalFeeBasisAmount?: Amount;
    totalMarketplaceFee?: Amount;
}
