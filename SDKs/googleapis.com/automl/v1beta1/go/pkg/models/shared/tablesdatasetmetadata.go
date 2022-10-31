package shared



type TablesDatasetMetadata struct {
    MlUseColumnSpecID *string `json:"mlUseColumnSpecId,omitempty"`
    PrimaryTableSpecID *string `json:"primaryTableSpecId,omitempty"`
    StatsUpdateTime *string `json:"statsUpdateTime,omitempty"`
    TargetColumnCorrelations map[string]CorrelationStats `json:"targetColumnCorrelations,omitempty"`
    TargetColumnSpecID *string `json:"targetColumnSpecId,omitempty"`
    WeightColumnSpecID *string `json:"weightColumnSpecId,omitempty"`
    
}

