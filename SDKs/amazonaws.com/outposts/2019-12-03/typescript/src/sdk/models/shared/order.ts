import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItem } from "./lineitem";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { OrderStatusEnum } from "./orderstatusenum";



// Order
/** 
 * Information about an order.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LineItems", elemType: LineItem })
  lineItems?: LineItem[];

  @SpeakeasyMetadata({ data: "json, name=OrderFulfilledDate" })
  orderFulfilledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=OrderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderSubmissionDate" })
  orderSubmissionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=OutpostId" })
  outpostId?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentOption" })
  paymentOption?: PaymentOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OrderStatusEnum;
}
