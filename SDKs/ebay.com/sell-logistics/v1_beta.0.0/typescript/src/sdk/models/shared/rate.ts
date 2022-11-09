import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";
import { PickupSlot } from "./pickupslot";


// Rate
/** 
 * This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.
**/
export class Rate extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalOptions", elemType: shared.AdditionalOption })
  additionalOptions?: AdditionalOption[];

  @Metadata({ data: "json, name=baseShippingCost" })
  baseShippingCost?: Amount;

  @Metadata({ data: "json, name=destinationTimeZone" })
  destinationTimeZone?: string;

  @Metadata({ data: "json, name=maxEstimatedDeliveryDate" })
  maxEstimatedDeliveryDate?: string;

  @Metadata({ data: "json, name=minEstimatedDeliveryDate" })
  minEstimatedDeliveryDate?: string;

  @Metadata({ data: "json, name=pickupNetworks" })
  pickupNetworks?: string[];

  @Metadata({ data: "json, name=pickupSlots", elemType: shared.PickupSlot })
  pickupSlots?: PickupSlot[];

  @Metadata({ data: "json, name=pickupType" })
  pickupType?: string;

  @Metadata({ data: "json, name=rateId" })
  rateId?: string;

  @Metadata({ data: "json, name=rateRecommendation" })
  rateRecommendation?: string[];

  @Metadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @Metadata({ data: "json, name=shippingCarrierName" })
  shippingCarrierName?: string;

  @Metadata({ data: "json, name=shippingServiceCode" })
  shippingServiceCode?: string;

  @Metadata({ data: "json, name=shippingServiceName" })
  shippingServiceName?: string;
}
