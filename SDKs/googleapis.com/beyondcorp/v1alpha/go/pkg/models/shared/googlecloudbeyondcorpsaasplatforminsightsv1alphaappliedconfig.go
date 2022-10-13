package shared

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum string

const (
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnumAggregationUnspecified GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum = "AGGREGATION_UNSPECIFIED"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnumHourly                 GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum = "HOURLY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnumDaily                  GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum = "DAILY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnumWeekly                 GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum = "WEEKLY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnumMonthly                GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum = "MONTHLY"
	GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnumCustomDateRange        GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum = "CUSTOM_DATE_RANGE"
)

type GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig struct {
	Aggregation    *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum `json:"aggregation"`
	CustomGrouping *GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping               `json:"customGrouping"`
	EndTime        *string                                                                       `json:"endTime"`
	FieldFilter    *string                                                                       `json:"fieldFilter"`
	Group          *string                                                                       `json:"group"`
	StartTime      *string                                                                       `json:"startTime"`
}
