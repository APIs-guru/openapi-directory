import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";



export class AddOrderDealsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deals", elemType: MarketplaceDeal })
  deals?: MarketplaceDeal[];

  @SpeakeasyMetadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;
}
