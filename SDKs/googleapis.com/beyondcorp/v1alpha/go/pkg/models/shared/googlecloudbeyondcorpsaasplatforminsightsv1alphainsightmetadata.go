package shared

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum string

const (
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnumAggregationUnspecified GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum = "AGGREGATION_UNSPECIFIED"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnumHourly                 GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum = "HOURLY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnumDaily                  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum = "DAILY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnumWeekly                 GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum = "WEEKLY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnumMonthly                GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum = "MONTHLY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnumCustomDateRange        GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum = "CUSTOM_DATE_RANGE"
)

// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata
// Insight filters, groupings and aggregations that can be applied for the insight. Examples: aggregations, groups, field filters.
type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata struct {
	Aggregations []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum `json:"aggregations,omitempty"`
	Category     *string                                                                           `json:"category,omitempty"`
	DisplayName  *string                                                                           `json:"displayName,omitempty"`
	Fields       []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField            `json:"fields,omitempty"`
	Groups       []string                                                                          `json:"groups,omitempty"`
	SubCategory  *string                                                                           `json:"subCategory,omitempty"`
	Type         *string                                                                           `json:"type,omitempty"`
}
