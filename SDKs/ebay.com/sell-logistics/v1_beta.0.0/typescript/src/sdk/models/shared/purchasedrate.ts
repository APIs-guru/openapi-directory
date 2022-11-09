import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";
import { Amount } from "./amount";


// PurchasedRate
/** 
 * The &quot;rate&quot; that has been selected and purchased for the shipment, as referenced by the rateId value.
**/
export class PurchasedRate extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=pickupSlotId" })
  pickupSlotId?: string;

  @Metadata({ data: "json, name=pickupType" })
  pickupType?: string;

  @Metadata({ data: "json, name=rateId" })
  rateId?: string;

  @Metadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @Metadata({ data: "json, name=shippingCarrierName" })
  shippingCarrierName?: string;

  @Metadata({ data: "json, name=shippingQuoteId" })
  shippingQuoteId?: string;

  @Metadata({ data: "json, name=shippingServiceCode" })
  shippingServiceCode?: string;

  @Metadata({ data: "json, name=shippingServiceName" })
  shippingServiceName?: string;

  @Metadata({ data: "json, name=totalShippingCost" })
  totalShippingCost?: Amount;
}
