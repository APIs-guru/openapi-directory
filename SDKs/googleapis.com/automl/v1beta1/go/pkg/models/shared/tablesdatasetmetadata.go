package shared

type TablesDatasetMetadata struct {
	MlUseColumnSpecID        *string                     `json:"mlUseColumnSpecId"`
	PrimaryTableSpecID       *string                     `json:"primaryTableSpecId"`
	StatsUpdateTime          *string                     `json:"statsUpdateTime"`
	TargetColumnCorrelations map[string]CorrelationStats `json:"targetColumnCorrelations"`
	TargetColumnSpecID       *string                     `json:"targetColumnSpecId"`
	WeightColumnSpecID       *string                     `json:"weightColumnSpecId"`
}
