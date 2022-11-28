import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceListingPlan } from "./marketplacelistingplan";



export class MarketplacePurchaseMarketplacePendingChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective_date" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_installed" })
  isInstalled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: MarketplaceListingPlan;

  @SpeakeasyMetadata({ data: "json, name=unit_count" })
  unitCount?: number;
}


export class MarketplacePurchaseMarketplacePurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_cycle" })
  billingCycle?: string;

  @SpeakeasyMetadata({ data: "json, name=free_trial_ends_on" })
  freeTrialEndsOn?: string;

  @SpeakeasyMetadata({ data: "json, name=is_installed" })
  isInstalled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_billing_date" })
  nextBillingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=on_free_trial" })
  onFreeTrial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: MarketplaceListingPlan;

  @SpeakeasyMetadata({ data: "json, name=unit_count" })
  unitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


// MarketplacePurchase
/** 
 * Marketplace Purchase
**/
export class MarketplacePurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=marketplace_pending_change" })
  marketplacePendingChange?: MarketplacePurchaseMarketplacePendingChange;

  @SpeakeasyMetadata({ data: "json, name=marketplace_purchase" })
  marketplacePurchase: MarketplacePurchaseMarketplacePurchase;

  @SpeakeasyMetadata({ data: "json, name=organization_billing_email" })
  organizationBillingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
