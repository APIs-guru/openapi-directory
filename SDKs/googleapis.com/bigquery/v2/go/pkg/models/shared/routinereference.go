package shared

type RoutineReference struct {
	DatasetID *string `json:"datasetId,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	RoutineID *string `json:"routineId,omitempty"`
}
