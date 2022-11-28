import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackingInfo
/** 
 * This type is used by the shipmentTracking array returned under the evidence container if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY for an INR-related payment dispute.
**/
export class TrackingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipmentTrackingNumber" })
  shipmentTrackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;
}
