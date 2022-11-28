import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";
/**
 * The &quot;rate&quot; that has been selected and purchased for the shipment, as referenced by the rateId value.
**/
export declare class PurchasedRate extends SpeakeasyBase {
    additionalOptions?: AdditionalOption[];
    baseShippingCost?: Amount;
    destinationTimeZone?: string;
    maxEstimatedDeliveryDate?: string;
    minEstimatedDeliveryDate?: string;
    pickupNetworks?: string[];
    pickupSlotId?: string;
    pickupType?: string;
    rateId?: string;
    shippingCarrierCode?: string;
    shippingCarrierName?: string;
    shippingQuoteId?: string;
    shippingServiceCode?: string;
    shippingServiceName?: string;
    totalShippingCost?: Amount;
}
