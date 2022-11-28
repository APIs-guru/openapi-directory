package shared

type CohortsRangeGranularityEnum string

const (
	CohortsRangeGranularityEnumGranularityUnspecified CohortsRangeGranularityEnum = "GRANULARITY_UNSPECIFIED"
	CohortsRangeGranularityEnumDaily                  CohortsRangeGranularityEnum = "DAILY"
	CohortsRangeGranularityEnumWeekly                 CohortsRangeGranularityEnum = "WEEKLY"
	CohortsRangeGranularityEnumMonthly                CohortsRangeGranularityEnum = "MONTHLY"
)

// CohortsRange
// Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
type CohortsRange struct {
	EndOffset   *int32                       `json:"endOffset,omitempty"`
	Granularity *CohortsRangeGranularityEnum `json:"granularity,omitempty"`
	StartOffset *int32                       `json:"startOffset,omitempty"`
}
