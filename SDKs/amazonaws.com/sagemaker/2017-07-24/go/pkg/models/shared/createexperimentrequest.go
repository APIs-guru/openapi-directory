package shared

type CreateExperimentRequest struct {
	Description    *string `json:"Description"`
	DisplayName    *string `json:"DisplayName"`
	ExperimentName string  `json:"ExperimentName"`
	Tags           []Tag   `json:"Tags"`
}
