import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
import { Seller } from "./seller";



export class MarketplaceDealParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: Seller;
}
