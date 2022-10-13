package shared

type ExecutionParameter struct {
	DefaultValues []string `json:"DefaultValues"`
	Name          *string  `json:"Name"`
	Type          *string  `json:"Type"`
}
