import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the shipmentTracking array returned under the evidence container if the seller has provided shipment tracking information as evidence to support PROOF_OF_DELIVERY for an INR-related payment dispute.
**/
export declare class TrackingInfo extends SpeakeasyBase {
    shipmentTrackingNumber?: string;
    shippingCarrierCode?: string;
}
