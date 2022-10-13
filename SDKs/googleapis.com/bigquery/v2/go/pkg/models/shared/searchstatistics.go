package shared

type SearchStatistics struct {
	IndexUnusedReason []IndexUnusedReason `json:"indexUnusedReason"`
	IndexUsageMode    *string             `json:"indexUsageMode"`
}
