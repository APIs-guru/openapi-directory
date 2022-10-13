package shared

type AssociationOverview struct {
	AssociationStatusAggregatedCount map[string]int64 `json:"AssociationStatusAggregatedCount"`
	DetailedStatus                   *string          `json:"DetailedStatus"`
	Status                           *string          `json:"Status"`
}
