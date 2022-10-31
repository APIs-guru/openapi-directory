package shared




type PrepaidBasePlanTypeTimeExtensionEnum string

const (
    PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionUnspecified PrepaidBasePlanTypeTimeExtensionEnum = "TIME_EXTENSION_UNSPECIFIED"
PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionActive PrepaidBasePlanTypeTimeExtensionEnum = "TIME_EXTENSION_ACTIVE"
PrepaidBasePlanTypeTimeExtensionEnumTimeExtensionInactive PrepaidBasePlanTypeTimeExtensionEnum = "TIME_EXTENSION_INACTIVE"
)


type PrepaidBasePlanType struct {
    BillingPeriodDuration *string `json:"billingPeriodDuration,omitempty"`
    TimeExtension *PrepaidBasePlanTypeTimeExtensionEnum `json:"timeExtension,omitempty"`
    
}

