import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { CancelStatus } from "./cancelstatus";
import { FulfillmentStartInstruction } from "./fulfillmentstartinstruction";
import { LineItem } from "./lineitem";
import { PaymentSummary } from "./paymentsummary";
import { PricingSummary } from "./pricingsummary";
import { Program } from "./program";
import { Amount } from "./amount";



// Order
/** 
 * This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=buyerCheckoutNotes" })
  buyerCheckoutNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelStatus" })
  cancelStatus?: CancelStatus;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ebayCollectAndRemitTax" })
  ebayCollectAndRemitTax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentHrefs" })
  fulfillmentHrefs?: string[];

  @SpeakeasyMetadata({ data: "json, name=fulfillmentStartInstructions", elemType: FulfillmentStartInstruction })
  fulfillmentStartInstructions?: FulfillmentStartInstruction[];

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyOrderId" })
  legacyOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: LineItem })
  lineItems?: LineItem[];

  @SpeakeasyMetadata({ data: "json, name=orderFulfillmentStatus" })
  orderFulfillmentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderPaymentStatus" })
  orderPaymentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentSummary" })
  paymentSummary?: PaymentSummary;

  @SpeakeasyMetadata({ data: "json, name=pricingSummary" })
  pricingSummary?: PricingSummary;

  @SpeakeasyMetadata({ data: "json, name=program" })
  program?: Program;

  @SpeakeasyMetadata({ data: "json, name=salesRecordReference" })
  salesRecordReference?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerId" })
  sellerId?: string;

  @SpeakeasyMetadata({ data: "json, name=totalFeeBasisAmount" })
  totalFeeBasisAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=totalMarketplaceFee" })
  totalMarketplaceFee?: Amount;
}
