package shared

type InstanceAggregatedAssociationOverview struct {
	DetailedStatus                           *string          `json:"DetailedStatus,omitempty"`
	InstanceAssociationStatusAggregatedCount map[string]int64 `json:"InstanceAssociationStatusAggregatedCount,omitempty"`
}
