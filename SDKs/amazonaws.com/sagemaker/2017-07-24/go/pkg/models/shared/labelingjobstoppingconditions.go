package shared

type LabelingJobStoppingConditions struct {
	MaxHumanLabeledObjectCount         *int64 `json:"MaxHumanLabeledObjectCount"`
	MaxPercentageOfInputDatasetLabeled *int64 `json:"MaxPercentageOfInputDatasetLabeled"`
}
