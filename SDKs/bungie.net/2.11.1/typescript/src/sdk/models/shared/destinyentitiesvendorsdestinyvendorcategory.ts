import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyEntitiesVendorsDestinyVendorCategory
/** 
 * Information about the category and items currently sold in that category.
**/
export class DestinyEntitiesVendorsDestinyVendorCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayCategoryIndex?: number;

  @SpeakeasyMetadata()
  itemIndexes?: number[];
}
