package shared

type InstanceAggregatedAssociationOverview struct {
	DetailedStatus                           *string          `json:"DetailedStatus"`
	InstanceAssociationStatusAggregatedCount map[string]int64 `json:"InstanceAssociationStatusAggregatedCount"`
}
