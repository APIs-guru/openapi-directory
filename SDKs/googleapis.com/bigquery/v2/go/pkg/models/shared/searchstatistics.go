package shared

type SearchStatistics struct {
	IndexUnusedReason []IndexUnusedReason `json:"indexUnusedReason,omitempty"`
	IndexUsageMode    *string             `json:"indexUsageMode,omitempty"`
}
