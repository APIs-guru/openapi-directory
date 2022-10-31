package shared



type UpdateExperimentRequest struct {
    Description *string `json:"Description,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    ExperimentName string `json:"ExperimentName"`
    
}

