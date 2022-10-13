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

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata struct {
	Aggregations []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum `json:"aggregations"`
	Category     *string                                                                           `json:"category"`
	DisplayName  *string                                                                           `json:"displayName"`
	Fields       []GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField            `json:"fields"`
	Groups       []string                                                                          `json:"groups"`
	SubCategory  *string                                                                           `json:"subCategory"`
	Type         *string                                                                           `json:"type"`
}
