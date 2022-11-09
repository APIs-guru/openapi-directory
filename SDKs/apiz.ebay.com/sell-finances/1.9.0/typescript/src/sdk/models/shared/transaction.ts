import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Amount } from "./amount";
import { Buyer } from "./buyer";
import { OrderLineItem } from "./orderlineitem";
import { Reference } from "./reference";
import { Amount } from "./amount";
import { Amount } from "./amount";


// Transaction
/** 
 * This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
**/
export class Transaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=bookingEntry" })
  bookingEntry?: string;

  @Metadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @Metadata({ data: "json, name=feeType" })
  feeType?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=orderLineItems", elemType: shared.OrderLineItem })
  orderLineItems?: OrderLineItem[];

  @Metadata({ data: "json, name=paymentsEntity" })
  paymentsEntity?: string;

  @Metadata({ data: "json, name=payoutId" })
  payoutId?: string;

  @Metadata({ data: "json, name=references", elemType: shared.Reference })
  references?: Reference[];

  @Metadata({ data: "json, name=salesRecordReference" })
  salesRecordReference?: string;

  @Metadata({ data: "json, name=totalFeeAmount" })
  totalFeeAmount?: Amount;

  @Metadata({ data: "json, name=totalFeeBasisAmount" })
  totalFeeBasisAmount?: Amount;

  @Metadata({ data: "json, name=transactionDate" })
  transactionDate?: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @Metadata({ data: "json, name=transactionMemo" })
  transactionMemo?: string;

  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus?: string;

  @Metadata({ data: "json, name=transactionType" })
  transactionType?: string;
}
