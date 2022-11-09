import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Exclusion } from "./exclusion";


// ProductAdoptionPolicy
/** 
 * This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
**/
export class ProductAdoptionPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=categoryTreeId" })
  categoryTreeId?: string;

  @Metadata({ data: "json, name=exclusion" })
  exclusion?: Exclusion;

  @Metadata({ data: "json, name=productRequired" })
  productRequired?: boolean;
}
