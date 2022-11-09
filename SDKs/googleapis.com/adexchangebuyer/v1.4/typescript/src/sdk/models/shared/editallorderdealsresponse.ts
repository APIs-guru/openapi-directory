import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketplaceDeal } from "./marketplacedeal";


export class EditAllOrderDealsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deals", elemType: shared.MarketplaceDeal })
  deals?: MarketplaceDeal[];

  @Metadata({ data: "json, name=orderRevisionNumber" })
  orderRevisionNumber?: string;
}
