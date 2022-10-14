package shared

type UnlabelParameterVersionResult struct {
	InvalidLabels []string `json:"InvalidLabels,omitempty"`
	RemovedLabels []string `json:"RemovedLabels,omitempty"`
}
