import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains a breakdown of all costs associated with the fulfillment of a line item.
**/
export declare class DeliveryCost extends SpeakeasyBase {
    importCharges?: Amount;
    shippingCost?: Amount;
    shippingIntermediationFee?: Amount;
}
