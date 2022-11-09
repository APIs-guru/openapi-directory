import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// OfferedItem
/** 
 * A complex type that defines the offer being made to an &quot;interested&quot; buyer.
**/
export class OfferedItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=discountPercentage" })
  discountPercentage?: string;

  @Metadata({ data: "json, name=listingId" })
  listingId?: string;

  @Metadata({ data: "json, name=price" })
  price?: Amount;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
