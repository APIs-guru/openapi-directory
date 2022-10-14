package shared

type UpdateParallelDataRequest struct {
	ClientToken        string             `json:"ClientToken"`
	Description        *string            `json:"Description,omitempty"`
	Name               string             `json:"Name"`
	ParallelDataConfig ParallelDataConfig `json:"ParallelDataConfig"`
}
