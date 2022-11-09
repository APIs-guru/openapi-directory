import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EligibleItem
/** 
 * A listing that is eligible for a seller-initiated offer to a buyer. Listings are identified by a listingId value that is generated and assigned by eBay when a seller lists an item using the Trading API. Note: The Negotiation API does not currently support listings that are managed with the Inventory API.
**/
export class EligibleItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=listingId" })
  listingId?: string;
}
