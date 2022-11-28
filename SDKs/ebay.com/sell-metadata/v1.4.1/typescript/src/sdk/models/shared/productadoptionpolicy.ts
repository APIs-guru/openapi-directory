import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Exclusion } from "./exclusion";



// ProductAdoptionPolicy
/** 
 * This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
**/
export class ProductAdoptionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @SpeakeasyMetadata({ data: "json, name=exclusion" })
  exclusion?: Exclusion;

  @SpeakeasyMetadata({ data: "json, name=productRequired" })
  productRequired?: boolean;
}
