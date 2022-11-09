import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Charity } from "./charity";
import { PricingSummary } from "./pricingsummary";
import { Product } from "./product";


// ItemDraft
/** 
 * The type that defines the fields for the listing details.
**/
export class ItemDraft extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=charity" })
  charity?: Charity;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=pricingSummary" })
  pricingSummary?: PricingSummary;

  @Metadata({ data: "json, name=product" })
  product?: Product;
}
