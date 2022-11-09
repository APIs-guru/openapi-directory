import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Ad
/** 
 * This type defines the fields for an ad.
**/
export class Ad extends SpeakeasyBase {
  @Metadata({ data: "json, name=adId" })
  adId?: string;

  @Metadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @Metadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @Metadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;

  @Metadata({ data: "json, name=listingId" })
  listingId?: string;
}
