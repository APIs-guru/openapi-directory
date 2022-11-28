import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Exclusion
/** 
 * This type returns a list of properties (and their associated values) that are excluded from requiring an ePID value (from the eBay Catalog) for items that are listed in the associated category.
**/
export class Exclusion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brands" })
  brands?: string[];
}
