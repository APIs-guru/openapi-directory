package shared



type AssociationOverview struct {
    AssociationStatusAggregatedCount map[string]int64 `json:"AssociationStatusAggregatedCount,omitempty"`
    DetailedStatus *string `json:"DetailedStatus,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

