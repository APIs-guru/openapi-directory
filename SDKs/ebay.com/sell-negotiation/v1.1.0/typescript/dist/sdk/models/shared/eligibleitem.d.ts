import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API.
**/
export declare class EligibleItem extends SpeakeasyBase {
    listingId?: string;
}
