import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LineItem } from "./lineitem";
import { PaymentOptionEnum } from "./paymentoptionenum";
import { OrderStatusEnum } from "./orderstatusenum";
/**
 * Information about an order.
**/
export declare class Order extends SpeakeasyBase {
    lineItems?: LineItem[];
    orderFulfilledDate?: Date;
    orderId?: string;
    orderSubmissionDate?: Date;
    outpostId?: string;
    paymentOption?: PaymentOptionEnum;
    status?: OrderStatusEnum;
}
