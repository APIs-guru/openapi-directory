import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";
import { PickupSlot } from "./pickupslot";



// Rate
/** 
 * This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.
**/
export class Rate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalOptions", elemType: AdditionalOption })
  additionalOptions?: AdditionalOption[];

  @SpeakeasyMetadata({ data: "json, name=baseShippingCost" })
  baseShippingCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=destinationTimeZone" })
  destinationTimeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=maxEstimatedDeliveryDate" })
  maxEstimatedDeliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=minEstimatedDeliveryDate" })
  minEstimatedDeliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupNetworks" })
  pickupNetworks?: string[];

  @SpeakeasyMetadata({ data: "json, name=pickupSlots", elemType: PickupSlot })
  pickupSlots?: PickupSlot[];

  @SpeakeasyMetadata({ data: "json, name=pickupType" })
  pickupType?: string;

  @SpeakeasyMetadata({ data: "json, name=rateId" })
  rateId?: string;

  @SpeakeasyMetadata({ data: "json, name=rateRecommendation" })
  rateRecommendation?: string[];

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierName" })
  shippingCarrierName?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingServiceCode" })
  shippingServiceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingServiceName" })
  shippingServiceName?: string;
}
