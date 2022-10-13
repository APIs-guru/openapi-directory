package shared

type AutoRenewingBasePlanTypeProrationModeEnum string

const (
	AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeUnspecified                AutoRenewingBasePlanTypeProrationModeEnum = "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED"
	AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeChargeOnNextBillingDate    AutoRenewingBasePlanTypeProrationModeEnum = "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE"
	AutoRenewingBasePlanTypeProrationModeEnumSubscriptionProrationModeChargeFullPriceImmediately AutoRenewingBasePlanTypeProrationModeEnum = "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"
)

type AutoRenewingBasePlanTypeResubscribeStateEnum string

const (
	AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateUnspecified AutoRenewingBasePlanTypeResubscribeStateEnum = "RESUBSCRIBE_STATE_UNSPECIFIED"
	AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateActive      AutoRenewingBasePlanTypeResubscribeStateEnum = "RESUBSCRIBE_STATE_ACTIVE"
	AutoRenewingBasePlanTypeResubscribeStateEnumResubscribeStateInactive    AutoRenewingBasePlanTypeResubscribeStateEnum = "RESUBSCRIBE_STATE_INACTIVE"
)

type AutoRenewingBasePlanType struct {
	BillingPeriodDuration               *string                                       `json:"billingPeriodDuration"`
	GracePeriodDuration                 *string                                       `json:"gracePeriodDuration"`
	LegacyCompatible                    *bool                                         `json:"legacyCompatible"`
	LegacyCompatibleSubscriptionOfferID *string                                       `json:"legacyCompatibleSubscriptionOfferId"`
	ProrationMode                       *AutoRenewingBasePlanTypeProrationModeEnum    `json:"prorationMode"`
	ResubscribeState                    *AutoRenewingBasePlanTypeResubscribeStateEnum `json:"resubscribeState"`
}
