package shared

type PrepaidBasePlanTypeTimeExtensionEnum string

const (
	PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionUnspecified PrepaidBasePlanTypeTimeExtensionEnum = "TIME_EXTENSION_UNSPECIFIED"
	PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionActive      PrepaidBasePlanTypeTimeExtensionEnum = "TIME_EXTENSION_ACTIVE"
	PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionInactive    PrepaidBasePlanTypeTimeExtensionEnum = "TIME_EXTENSION_INACTIVE"
)

// PrepaidBasePlanType
// Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
type PrepaidBasePlanType struct {
	BillingPeriodDuration *string                               `json:"billingPeriodDuration,omitempty"`
	TimeExtension         *PrepaidBasePlanTypeTimeExtensionEnum `json:"timeExtension,omitempty"`
}
