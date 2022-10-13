package shared

type CustomStepDetails struct {
	Name           *string `json:"Name"`
	Target         *string `json:"Target"`
	TimeoutSeconds *int64  `json:"TimeoutSeconds"`
}
