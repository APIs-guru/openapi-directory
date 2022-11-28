import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AutoRenewingBasePlanTypeProrationModeEnum {
    SubscriptionProrationModeUnspecified = "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED",
    SubscriptionProrationModeChargeOnNextBillingDate = "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE",
    SubscriptionProrationModeChargeFullPriceImmediately = "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"
}

export enum AutoRenewingBasePlanTypeResubscribeStateEnum {
    ResubscribeStateUnspecified = "RESUBSCRIBE_STATE_UNSPECIFIED",
    ResubscribeStateActive = "RESUBSCRIBE_STATE_ACTIVE",
    ResubscribeStateInactive = "RESUBSCRIBE_STATE_INACTIVE"
}


// AutoRenewingBasePlanType
/** 
 * Represents a base plan that automatically renews at the end of its subscription period.
**/
export class AutoRenewingBasePlanType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriodDuration" })
  billingPeriodDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=gracePeriodDuration" })
  gracePeriodDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyCompatible" })
  legacyCompatible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=legacyCompatibleSubscriptionOfferId" })
  legacyCompatibleSubscriptionOfferId?: string;

  @SpeakeasyMetadata({ data: "json, name=prorationMode" })
  prorationMode?: AutoRenewingBasePlanTypeProrationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=resubscribeState" })
  resubscribeState?: AutoRenewingBasePlanTypeResubscribeStateEnum;
}
