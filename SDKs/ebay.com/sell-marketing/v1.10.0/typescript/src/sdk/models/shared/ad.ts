import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ad
/** 
 * This type defines the fields for an ad.
**/
export class Ad extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;

  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;
}
