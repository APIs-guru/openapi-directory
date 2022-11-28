import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MarketplaceListingPlan
/** 
 * Marketplace Listing Plan
**/
export class MarketplaceListingPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts_url" })
  accountsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=bullets" })
  bullets: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=has_free_trial" })
  hasFreeTrial: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_price_in_cents" })
  monthlyPriceInCents: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=price_model" })
  priceModel: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=unit_name" })
  unitName: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=yearly_price_in_cents" })
  yearlyPriceInCents: number;
}
