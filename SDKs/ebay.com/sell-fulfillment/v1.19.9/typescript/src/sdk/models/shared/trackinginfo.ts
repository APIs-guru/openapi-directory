import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackingInfo
/** 
 * This type is used by the shipmentTracking array returned under the evidence container if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY for an INR-related payment dispute.
**/
export class TrackingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=shipmentTrackingNumber" })
  shipmentTrackingNumber?: string;

  @Metadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;
}
