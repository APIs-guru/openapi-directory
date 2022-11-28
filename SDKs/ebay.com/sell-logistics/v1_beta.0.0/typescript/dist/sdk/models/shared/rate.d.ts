import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";
import { PickupSlot } from "./pickupslot";
/**
 * This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.
**/
export declare class Rate extends SpeakeasyBase {
    additionalOptions?: AdditionalOption[];
    baseShippingCost?: Amount;
    destinationTimeZone?: string;
    maxEstimatedDeliveryDate?: string;
    minEstimatedDeliveryDate?: string;
    pickupNetworks?: string[];
    pickupSlots?: PickupSlot[];
    pickupType?: string;
    rateId?: string;
    rateRecommendation?: string[];
    shippingCarrierCode?: string;
    shippingCarrierName?: string;
    shippingServiceCode?: string;
    shippingServiceName?: string;
}
