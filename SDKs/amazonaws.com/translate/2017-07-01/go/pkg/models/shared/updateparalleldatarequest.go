package shared

type UpdateParallelDataRequest struct {
	ClientToken        string             `json:"ClientToken"`
	Description        *string            `json:"Description"`
	Name               string             `json:"Name"`
	ParallelDataConfig ParallelDataConfig `json:"ParallelDataConfig"`
}
