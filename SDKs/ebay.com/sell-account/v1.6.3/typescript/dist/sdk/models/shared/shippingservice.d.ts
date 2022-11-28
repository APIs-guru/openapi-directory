import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { RegionSet } from "./regionset";
/**
 * A complex type that defines the available shipping services offered in the parent shippingOptions container. The shipping services specified here must be able to accommodate the optionType defined in the parent shippingOption container (either DOMESTIC or INTERNATIONAL). Tip: For more on setting up shipping services, see Setting the shipping carrier and shipping service values.
**/
export declare class ShippingService extends SpeakeasyBase {
    additionalShippingCost?: Amount;
    buyerResponsibleForPickup?: boolean;
    buyerResponsibleForShipping?: boolean;
    cashOnDeliveryFee?: Amount;
    freeShipping?: boolean;
    shipToLocations?: RegionSet;
    shippingCarrierCode?: string;
    shippingCost?: Amount;
    shippingServiceCode?: string;
    sortOrder?: number;
    surcharge?: Amount;
}
