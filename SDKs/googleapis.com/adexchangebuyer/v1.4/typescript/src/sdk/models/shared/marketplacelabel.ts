import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketplaceDealParty } from "./marketplacedealparty";


export class MarketplaceLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=createTimeMs" })
  createTimeMs?: string;

  @Metadata({ data: "json, name=deprecatedMarketplaceDealParty" })
  deprecatedMarketplaceDealParty?: MarketplaceDealParty;

  @Metadata({ data: "json, name=label" })
  label?: string;
}
