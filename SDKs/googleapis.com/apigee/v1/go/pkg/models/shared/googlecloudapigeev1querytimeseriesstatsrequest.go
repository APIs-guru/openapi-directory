package shared

type GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum string

const (
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnumOrderUnspecified GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum = "ORDER_UNSPECIFIED"
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnumAscending        GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum = "ASCENDING"
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnumDescending       GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum = "DESCENDING"
)

type GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum string

const (
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnumWindowSizeUnspecified GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum = "WINDOW_SIZE_UNSPECIFIED"
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnumMinute                GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum = "MINUTE"
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnumHour                  GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum = "HOUR"
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnumDay                   GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum = "DAY"
	GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnumMonth                 GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum = "MONTH"
)

type GoogleCloudApigeeV1QueryTimeSeriesStatsRequest struct {
	Dimensions     []string                                                          `json:"dimensions"`
	Filter         *string                                                           `json:"filter"`
	Metrics        []GoogleCloudApigeeV1MetricAggregation                            `json:"metrics"`
	PageSize       *int32                                                            `json:"pageSize"`
	PageToken      *string                                                           `json:"pageToken"`
	TimeRange      *GoogleTypeInterval                                               `json:"timeRange"`
	TimestampOrder *GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum `json:"timestampOrder"`
	WindowSize     *GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum     `json:"windowSize"`
}
