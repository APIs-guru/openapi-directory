import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceAccount } from "./marketplaceaccount";
import { MarketplaceListingPlan } from "./marketplacelistingplan";
/**
 * User Marketplace Purchase
**/
export declare class UserMarketplacePurchase extends SpeakeasyBase {
    account: MarketplaceAccount;
    billingCycle: string;
    freeTrialEndsOn: Date;
    nextBillingDate: Date;
    onFreeTrial: boolean;
    plan: MarketplaceListingPlan;
    unitCount: number;
    updatedAt: Date;
}
