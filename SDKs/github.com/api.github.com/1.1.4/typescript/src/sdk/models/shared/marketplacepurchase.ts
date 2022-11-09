import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketplaceListingPlan } from "./marketplacelistingplan";
import { MarketplaceListingPlan } from "./marketplacelistingplan";


export class MarketplacePurchaseMarketplacePendingChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective_date" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_installed" })
  isInstalled?: boolean;

  @Metadata({ data: "json, name=plan" })
  plan?: MarketplaceListingPlan;

  @Metadata({ data: "json, name=unit_count" })
  unitCount?: number;
}


export class MarketplacePurchaseMarketplacePurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_cycle" })
  billingCycle?: string;

  @Metadata({ data: "json, name=free_trial_ends_on" })
  freeTrialEndsOn?: string;

  @Metadata({ data: "json, name=is_installed" })
  isInstalled?: boolean;

  @Metadata({ data: "json, name=next_billing_date" })
  nextBillingDate?: string;

  @Metadata({ data: "json, name=on_free_trial" })
  onFreeTrial?: boolean;

  @Metadata({ data: "json, name=plan" })
  plan?: MarketplaceListingPlan;

  @Metadata({ data: "json, name=unit_count" })
  unitCount?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


// MarketplacePurchase
/** 
 * Marketplace Purchase
**/
export class MarketplacePurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=marketplace_pending_change" })
  marketplacePendingChange?: MarketplacePurchaseMarketplacePendingChange;

  @Metadata({ data: "json, name=marketplace_purchase" })
  marketplacePurchase: MarketplacePurchaseMarketplacePurchase;

  @Metadata({ data: "json, name=organization_billing_email" })
  organizationBillingEmail?: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
