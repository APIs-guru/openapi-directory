import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketplaceAccount } from "./marketplaceaccount";
import { MarketplaceListingPlan } from "./marketplacelistingplan";


// UserMarketplacePurchase
/** 
 * User Marketplace Purchase
**/
export class UserMarketplacePurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: MarketplaceAccount;

  @Metadata({ data: "json, name=billing_cycle" })
  billingCycle: string;

  @Metadata({ data: "json, name=free_trial_ends_on" })
  freeTrialEndsOn: Date;

  @Metadata({ data: "json, name=next_billing_date" })
  nextBillingDate: Date;

  @Metadata({ data: "json, name=on_free_trial" })
  onFreeTrial: boolean;

  @Metadata({ data: "json, name=plan" })
  plan: MarketplaceListingPlan;

  @Metadata({ data: "json, name=unit_count" })
  unitCount: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
