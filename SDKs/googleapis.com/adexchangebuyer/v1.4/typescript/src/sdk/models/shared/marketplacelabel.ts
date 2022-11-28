import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDealParty } from "./marketplacedealparty";



export class MarketplaceLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTimeMs" })
  createTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=deprecatedMarketplaceDealParty" })
  deprecatedMarketplaceDealParty?: MarketplaceDealParty;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
