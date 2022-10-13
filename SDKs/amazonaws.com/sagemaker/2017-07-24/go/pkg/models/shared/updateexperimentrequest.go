package shared

type UpdateExperimentRequest struct {
	Description    *string `json:"Description"`
	DisplayName    *string `json:"DisplayName"`
	ExperimentName string  `json:"ExperimentName"`
}
