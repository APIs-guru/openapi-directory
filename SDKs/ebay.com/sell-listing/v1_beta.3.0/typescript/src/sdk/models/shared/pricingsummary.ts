import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// PricingSummary
/** 
 * The type that defines the fields for the price details for an item.
**/
export class PricingSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auctionReservePrice" })
  auctionReservePrice?: Amount;

  @SpeakeasyMetadata({ data: "json, name=auctionStartPrice" })
  auctionStartPrice?: Amount;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Amount;
}
