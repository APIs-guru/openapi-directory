import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";


// PricingSummary
/** 
 * The type that defines the fields for the price details for an item.
**/
export class PricingSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=auctionReservePrice" })
  auctionReservePrice?: Amount;

  @Metadata({ data: "json, name=auctionStartPrice" })
  auctionStartPrice?: Amount;

  @Metadata({ data: "json, name=price" })
  price?: Amount;
}
