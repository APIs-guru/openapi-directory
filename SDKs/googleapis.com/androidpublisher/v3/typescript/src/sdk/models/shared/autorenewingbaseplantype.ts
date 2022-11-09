import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AutoRenewingBasePlanTypeProrationModeEnum {
    SubscriptionProrationModeUnspecified = "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED"
,    SubscriptionProrationModeChargeOnNextBillingDate = "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE"
,    SubscriptionProrationModeChargeFullPriceImmediately = "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"
}

export enum AutoRenewingBasePlanTypeResubscribeStateEnum {
    ResubscribeStateUnspecified = "RESUBSCRIBE_STATE_UNSPECIFIED"
,    ResubscribeStateActive = "RESUBSCRIBE_STATE_ACTIVE"
,    ResubscribeStateInactive = "RESUBSCRIBE_STATE_INACTIVE"
}


// AutoRenewingBasePlanType
/** 
 * Represents a base plan that automatically renews at the end of its subscription period.
**/
export class AutoRenewingBasePlanType extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingPeriodDuration" })
  billingPeriodDuration?: string;

  @Metadata({ data: "json, name=gracePeriodDuration" })
  gracePeriodDuration?: string;

  @Metadata({ data: "json, name=legacyCompatible" })
  legacyCompatible?: boolean;

  @Metadata({ data: "json, name=legacyCompatibleSubscriptionOfferId" })
  legacyCompatibleSubscriptionOfferId?: string;

  @Metadata({ data: "json, name=prorationMode" })
  prorationMode?: AutoRenewingBasePlanTypeProrationModeEnum;

  @Metadata({ data: "json, name=resubscribeState" })
  resubscribeState?: AutoRenewingBasePlanTypeResubscribeStateEnum;
}
