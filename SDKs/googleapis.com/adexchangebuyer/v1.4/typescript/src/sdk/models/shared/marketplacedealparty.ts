import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Buyer } from "./buyer";
import { Seller } from "./seller";


export class MarketplaceDealParty extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyer" })
  buyer?: Buyer;

  @Metadata({ data: "json, name=seller" })
  seller?: Seller;
}
