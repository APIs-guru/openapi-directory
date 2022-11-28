package shared

type ActiveMetricRestrictionRestrictedMetricTypesEnum string

const (
	ActiveMetricRestrictionRestrictedMetricTypesEnumRestrictedMetricTypeUnspecified ActiveMetricRestrictionRestrictedMetricTypesEnum = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
	ActiveMetricRestrictionRestrictedMetricTypesEnumCostData                        ActiveMetricRestrictionRestrictedMetricTypesEnum = "COST_DATA"
	ActiveMetricRestrictionRestrictedMetricTypesEnumRevenueData                     ActiveMetricRestrictionRestrictedMetricTypesEnum = "REVENUE_DATA"
)

// ActiveMetricRestriction
// A metric actively restricted in creating the report.
type ActiveMetricRestriction struct {
	MetricName            *string                                            `json:"metricName,omitempty"`
	RestrictedMetricTypes []ActiveMetricRestrictionRestrictedMetricTypesEnum `json:"restrictedMetricTypes,omitempty"`
}
