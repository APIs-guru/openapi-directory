import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
**/
export declare class PricingSummary extends SpeakeasyBase {
    adjustment?: Amount;
    deliveryCost?: Amount;
    deliveryDiscount?: Amount;
    fee?: Amount;
    priceDiscountSubtotal?: Amount;
    priceSubtotal?: Amount;
    tax?: Amount;
    total?: Amount;
}
