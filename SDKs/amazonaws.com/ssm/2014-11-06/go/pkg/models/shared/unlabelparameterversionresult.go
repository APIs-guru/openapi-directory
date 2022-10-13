package shared

type UnlabelParameterVersionResult struct {
	InvalidLabels []string `json:"InvalidLabels"`
	RemovedLabels []string `json:"RemovedLabels"`
}
