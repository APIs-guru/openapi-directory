package shared

type GetMlModelInput struct {
	MlModelID string `json:"MLModelId"`
	Verbose   *bool  `json:"Verbose,omitempty"`
}
