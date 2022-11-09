import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Exclusion
/** 
 * This type returns a list of properties (and their associated values) that are excluded from requiring an ePID value (from the eBay Catalog) for items that are listed in the associated category.
**/
export class Exclusion extends SpeakeasyBase {
  @Metadata({ data: "json, name=brands" })
  brands?: string[];
}
