package shared

type TablesModelMetadata struct {
	DisableEarlyStopping                *bool                   `json:"disableEarlyStopping,omitempty"`
	InputFeatureColumnSpecs             []ColumnSpec            `json:"inputFeatureColumnSpecs,omitempty"`
	OptimizationObjective               *string                 `json:"optimizationObjective,omitempty"`
	OptimizationObjectivePrecisionValue *float32                `json:"optimizationObjectivePrecisionValue,omitempty"`
	OptimizationObjectiveRecallValue    *float32                `json:"optimizationObjectiveRecallValue,omitempty"`
	TablesModelColumnInfo               []TablesModelColumnInfo `json:"tablesModelColumnInfo,omitempty"`
	TargetColumnSpec                    *ColumnSpec             `json:"targetColumnSpec,omitempty"`
	TrainBudgetMilliNodeHours           *string                 `json:"trainBudgetMilliNodeHours,omitempty"`
	TrainCostMilliNodeHours             *string                 `json:"trainCostMilliNodeHours,omitempty"`
}
