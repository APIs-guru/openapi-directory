import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceAccount } from "./marketplaceaccount";
import { MarketplaceListingPlan } from "./marketplacelistingplan";



// UserMarketplacePurchase
/** 
 * User Marketplace Purchase
**/
export class UserMarketplacePurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: MarketplaceAccount;

  @SpeakeasyMetadata({ data: "json, name=billing_cycle" })
  billingCycle: string;

  @SpeakeasyMetadata({ data: "json, name=free_trial_ends_on" })
  freeTrialEndsOn: Date;

  @SpeakeasyMetadata({ data: "json, name=next_billing_date" })
  nextBillingDate: Date;

  @SpeakeasyMetadata({ data: "json, name=on_free_trial" })
  onFreeTrial: boolean;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan: MarketplaceListingPlan;

  @SpeakeasyMetadata({ data: "json, name=unit_count" })
  unitCount: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
