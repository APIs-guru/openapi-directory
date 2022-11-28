import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { RegionSet } from "./regionset";



// ShippingService
/** 
 * A complex type that defines the available shipping services offered in the parent shippingOptions container. The shipping services specified here must be able to accommodate the optionType defined in the parent shippingOption container (either DOMESTIC or INTERNATIONAL). Tip: For more on setting up shipping services, see Setting the shipping carrier and shipping service values.
**/
export class ShippingService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalShippingCost" })
  additionalShippingCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=buyerResponsibleForPickup" })
  buyerResponsibleForPickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=buyerResponsibleForShipping" })
  buyerResponsibleForShipping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cashOnDeliveryFee" })
  cashOnDeliveryFee?: Amount;

  @SpeakeasyMetadata({ data: "json, name=freeShipping" })
  freeShipping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shipToLocations" })
  shipToLocations?: RegionSet;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCost" })
  shippingCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=shippingServiceCode" })
  shippingServiceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=surcharge" })
  surcharge?: Amount;
}
