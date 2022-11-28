package shared

// InstanceAggregatedAssociationOverview
// Status information about the aggregated associations.
type InstanceAggregatedAssociationOverview struct {
	DetailedStatus                           *string          `json:"DetailedStatus,omitempty"`
	InstanceAssociationStatusAggregatedCount map[string]int64 `json:"InstanceAssociationStatusAggregatedCount,omitempty"`
}
