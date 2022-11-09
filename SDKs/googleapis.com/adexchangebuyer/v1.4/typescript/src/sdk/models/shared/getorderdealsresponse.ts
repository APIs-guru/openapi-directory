import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketplaceDeal } from "./marketplacedeal";


export class GetOrderDealsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deals", elemType: shared.MarketplaceDeal })
  deals?: MarketplaceDeal[];
}
