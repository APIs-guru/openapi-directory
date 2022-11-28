import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The details provided for the shipping provider, such as shipping cost and type.
**/
export declare class ShippingOption extends SpeakeasyBase {
    shippingCost?: Amount;
    shippingCostType?: string;
}
