import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";



// PurchasedRate
/** 
 * The &quot;rate&quot; that has been selected and purchased for the shipment, as referenced by the rateId value.
**/
export class PurchasedRate extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=pickupSlotId" })
  pickupSlotId?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupType" })
  pickupType?: string;

  @SpeakeasyMetadata({ data: "json, name=rateId" })
  rateId?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierName" })
  shippingCarrierName?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingQuoteId" })
  shippingQuoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingServiceCode" })
  shippingServiceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingServiceName" })
  shippingServiceName?: string;

  @SpeakeasyMetadata({ data: "json, name=totalShippingCost" })
  totalShippingCost?: Amount;
}
