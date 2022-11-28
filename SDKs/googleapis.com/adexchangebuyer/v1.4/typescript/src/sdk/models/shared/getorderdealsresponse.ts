import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";



export class GetOrderDealsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deals", elemType: MarketplaceDeal })
  deals?: MarketplaceDeal[];
}
