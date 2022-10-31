package shared

type CreateExperimentRequest struct {
	Description    *string `json:"Description,omitempty"`
	DisplayName    *string `json:"DisplayName,omitempty"`
	ExperimentName string  `json:"ExperimentName"`
	Tags           []Tag   `json:"Tags,omitempty"`
}
