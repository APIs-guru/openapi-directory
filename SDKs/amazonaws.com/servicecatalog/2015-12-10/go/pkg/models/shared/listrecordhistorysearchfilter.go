package shared

// ListRecordHistorySearchFilter
// The search filter to use when listing history records.
type ListRecordHistorySearchFilter struct {
	Key   *string `json:"Key,omitempty"`
	Value *string `json:"Value,omitempty"`
}
