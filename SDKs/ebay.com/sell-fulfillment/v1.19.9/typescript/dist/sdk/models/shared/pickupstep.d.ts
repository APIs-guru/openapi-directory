import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The pickupStep container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.
**/
export declare class PickupStep extends SpeakeasyBase {
    merchantLocationKey?: string;
}
