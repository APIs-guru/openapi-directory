import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Buyer } from "./buyer";
import { OrderLineItem } from "./orderlineitem";
import { Reference } from "./reference";



// Transaction
/** 
 * This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
**/
export class Transaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=bookingEntry" })
  bookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=feeType" })
  feeType?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: OrderLineItem })
  orderLineItems?: OrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=paymentsEntity" })
  paymentsEntity?: string;

  @SpeakeasyMetadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=references", elemType: Reference })
  references?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=salesRecordReference" })
  salesRecordReference?: string;

  @SpeakeasyMetadata({ data: "json, name=totalFeeAmount" })
  totalFeeAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=totalFeeBasisAmount" })
  totalFeeBasisAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=transactionDate" })
  transactionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionMemo" })
  transactionMemo?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionType" })
  transactionType?: string;
}
