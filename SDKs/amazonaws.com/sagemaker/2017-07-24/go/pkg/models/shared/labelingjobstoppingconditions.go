package shared



type LabelingJobStoppingConditions struct {
    MaxHumanLabeledObjectCount *int64 `json:"MaxHumanLabeledObjectCount,omitempty"`
    MaxPercentageOfInputDatasetLabeled *int64 `json:"MaxPercentageOfInputDatasetLabeled,omitempty"`
    
}

