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

// GoogleCloudApigeeV1QueryTimeSeriesStatsRequest
// QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.
type GoogleCloudApigeeV1QueryTimeSeriesStatsRequest struct {
	Dimensions     []string                                                          `json:"dimensions,omitempty"`
	Filter         *string                                                           `json:"filter,omitempty"`
	Metrics        []GoogleCloudApigeeV1MetricAggregation                            `json:"metrics,omitempty"`
	PageSize       *int32                                                            `json:"pageSize,omitempty"`
	PageToken      *string                                                           `json:"pageToken,omitempty"`
	TimeRange      *GoogleTypeInterval                                               `json:"timeRange,omitempty"`
	TimestampOrder *GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum `json:"timestampOrder,omitempty"`
	WindowSize     *GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum     `json:"windowSize,omitempty"`
}
