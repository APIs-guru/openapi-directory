package shared

type LabelParameterVersionResult struct {
	InvalidLabels    []string `json:"InvalidLabels,omitempty"`
	ParameterVersion *int64   `json:"ParameterVersion,omitempty"`
}
