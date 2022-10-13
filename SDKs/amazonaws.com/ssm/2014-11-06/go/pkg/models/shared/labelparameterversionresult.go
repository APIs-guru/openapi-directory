package shared

type LabelParameterVersionResult struct {
	InvalidLabels    []string `json:"InvalidLabels"`
	ParameterVersion *int64   `json:"ParameterVersion"`
}
