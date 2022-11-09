import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Buyer } from "./buyer";
import { CancelStatus } from "./cancelstatus";
import { FulfillmentStartInstruction } from "./fulfillmentstartinstruction";
import { LineItem } from "./lineitem";
import { PaymentSummary } from "./paymentsummary";
import { PricingSummary } from "./pricingsummary";
import { Program } from "./program";
import { Amount } from "./amount";
import { Amount } from "./amount";


// Order
/** 
 * This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @Metadata({ data: "json, name=buyerCheckoutNotes" })
  buyerCheckoutNotes?: string;

  @Metadata({ data: "json, name=cancelStatus" })
  cancelStatus?: CancelStatus;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=ebayCollectAndRemitTax" })
  ebayCollectAndRemitTax?: boolean;

  @Metadata({ data: "json, name=fulfillmentHrefs" })
  fulfillmentHrefs?: string[];

  @Metadata({ data: "json, name=fulfillmentStartInstructions", elemType: shared.FulfillmentStartInstruction })
  fulfillmentStartInstructions?: FulfillmentStartInstruction[];

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=legacyOrderId" })
  legacyOrderId?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.LineItem })
  lineItems?: LineItem[];

  @Metadata({ data: "json, name=orderFulfillmentStatus" })
  orderFulfillmentStatus?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=orderPaymentStatus" })
  orderPaymentStatus?: string;

  @Metadata({ data: "json, name=paymentSummary" })
  paymentSummary?: PaymentSummary;

  @Metadata({ data: "json, name=pricingSummary" })
  pricingSummary?: PricingSummary;

  @Metadata({ data: "json, name=program" })
  program?: Program;

  @Metadata({ data: "json, name=salesRecordReference" })
  salesRecordReference?: string;

  @Metadata({ data: "json, name=sellerId" })
  sellerId?: string;

  @Metadata({ data: "json, name=totalFeeBasisAmount" })
  totalFeeBasisAmount?: Amount;

  @Metadata({ data: "json, name=totalMarketplaceFee" })
  totalMarketplaceFee?: Amount;
}
