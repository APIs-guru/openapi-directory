import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MarketplaceListingPlan
/** 
 * Marketplace Listing Plan
**/
export class MarketplaceListingPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts_url" })
  accountsUrl: string;

  @Metadata({ data: "json, name=bullets" })
  bullets: string[];

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=has_free_trial" })
  hasFreeTrial: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=monthly_price_in_cents" })
  monthlyPriceInCents: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=price_model" })
  priceModel: string;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=unit_name" })
  unitName: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=yearly_price_in_cents" })
  yearlyPriceInCents: number;
}
