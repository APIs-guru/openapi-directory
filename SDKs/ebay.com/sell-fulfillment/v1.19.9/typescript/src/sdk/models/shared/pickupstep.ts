import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PickupStep
/** 
 * This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The pickupStep container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.
**/
export class PickupStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=merchantLocationKey" })
  merchantLocationKey?: string;
}
