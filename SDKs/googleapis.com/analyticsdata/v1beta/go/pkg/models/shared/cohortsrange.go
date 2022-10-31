package shared

type CohortsRangeGranularityEnum string

const (
	CohortsRangeGranularityEnumGranularityUnspecified CohortsRangeGranularityEnum = "GRANULARITY_UNSPECIFIED"
	CohortsRangeGranularityEnumDaily                  CohortsRangeGranularityEnum = "DAILY"
	CohortsRangeGranularityEnumWeekly                 CohortsRangeGranularityEnum = "WEEKLY"
	CohortsRangeGranularityEnumMonthly                CohortsRangeGranularityEnum = "MONTHLY"
)

type CohortsRange struct {
	EndOffset   *int32                       `json:"endOffset,omitempty"`
	Granularity *CohortsRangeGranularityEnum `json:"granularity,omitempty"`
	StartOffset *int32                       `json:"startOffset,omitempty"`
}
