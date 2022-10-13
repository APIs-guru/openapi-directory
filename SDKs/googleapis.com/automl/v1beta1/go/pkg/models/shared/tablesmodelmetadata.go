package shared

type TablesModelMetadata struct {
	DisableEarlyStopping                *bool                   `json:"disableEarlyStopping"`
	InputFeatureColumnSpecs             []ColumnSpec            `json:"inputFeatureColumnSpecs"`
	OptimizationObjective               *string                 `json:"optimizationObjective"`
	OptimizationObjectivePrecisionValue *float32                `json:"optimizationObjectivePrecisionValue"`
	OptimizationObjectiveRecallValue    *float32                `json:"optimizationObjectiveRecallValue"`
	TablesModelColumnInfo               []TablesModelColumnInfo `json:"tablesModelColumnInfo"`
	TargetColumnSpec                    *ColumnSpec             `json:"targetColumnSpec"`
	TrainBudgetMilliNodeHours           *string                 `json:"trainBudgetMilliNodeHours"`
	TrainCostMilliNodeHours             *string                 `json:"trainCostMilliNodeHours"`
}
