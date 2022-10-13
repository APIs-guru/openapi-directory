package shared

type ActiveMetricRestrictionRestrictedMetricTypesEnum string

const (
	ActiveMetricRestrictionRestrictedMetricTypesEnumRestrictedMetricTypeUnspecified ActiveMetricRestrictionRestrictedMetricTypesEnum = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
	ActiveMetricRestrictionRestrictedMetricTypesEnumCostData                        ActiveMetricRestrictionRestrictedMetricTypesEnum = "COST_DATA"
	ActiveMetricRestrictionRestrictedMetricTypesEnumRevenueData                     ActiveMetricRestrictionRestrictedMetricTypesEnum = "REVENUE_DATA"
)

type ActiveMetricRestriction struct {
	MetricName            *string                                            `json:"metricName"`
	RestrictedMetricTypes []ActiveMetricRestrictionRestrictedMetricTypesEnum `json:"restrictedMetricTypes"`
}
