import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineItem } from "./lineitem";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { OrderStatusEnum } from "./orderstatusenum";


// Order
/** 
 * Information about an order.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=LineItems", elemType: shared.LineItem })
  lineItems?: LineItem[];

  @Metadata({ data: "json, name=OrderFulfilledDate" })
  orderFulfilledDate?: Date;

  @Metadata({ data: "json, name=OrderId" })
  orderId?: string;

  @Metadata({ data: "json, name=OrderSubmissionDate" })
  orderSubmissionDate?: Date;

  @Metadata({ data: "json, name=OutpostId" })
  outpostId?: string;

  @Metadata({ data: "json, name=PaymentOption" })
  paymentOption?: PaymentOptionEnum;

  @Metadata({ data: "json, name=Status" })
  status?: OrderStatusEnum;
}
