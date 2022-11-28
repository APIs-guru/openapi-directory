import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Charity } from "./charity";
import { PricingSummary } from "./pricingsummary";
import { Product } from "./product";



// ItemDraft
/** 
 * The type that defines the fields for the listing details.
**/
export class ItemDraft extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=charity" })
  charity?: Charity;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingSummary" })
  pricingSummary?: PricingSummary;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: Product;
}
