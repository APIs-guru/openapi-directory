import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// OfferedItem
/** 
 * A complex type that defines the offer being made to an &quot;interested&quot; buyer.
**/
export class OfferedItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Amount;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
