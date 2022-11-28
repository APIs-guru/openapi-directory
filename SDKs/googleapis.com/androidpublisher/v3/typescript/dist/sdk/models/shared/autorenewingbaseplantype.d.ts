import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutoRenewingBasePlanTypeProrationModeEnum {
    SubscriptionProrationModeUnspecified = "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
    SubscriptionProrationModeChargeOnNextBillingDate = "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE",
    SubscriptionProrationModeChargeFullPriceImmediately = "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"
}
export declare enum AutoRenewingBasePlanTypeResubscribeStateEnum {
    ResubscribeStateUnspecified = "RESUBSCRIBE_STATE_UNSPECIFIED",
    ResubscribeStateActive = "RESUBSCRIBE_STATE_ACTIVE",
    ResubscribeStateInactive = "RESUBSCRIBE_STATE_INACTIVE"
}
/**
 * Represents a base plan that automatically renews at the end of its subscription period.
**/
export declare class AutoRenewingBasePlanType extends SpeakeasyBase {
    billingPeriodDuration?: string;
    gracePeriodDuration?: string;
    legacyCompatible?: boolean;
    legacyCompatibleSubscriptionOfferId?: string;
    prorationMode?: AutoRenewingBasePlanTypeProrationModeEnum;
    resubscribeState?: AutoRenewingBasePlanTypeResubscribeStateEnum;
}
