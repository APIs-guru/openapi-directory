package shared

type LabelParameterVersionRequest struct {
	Labels           []string `json:"Labels"`
	Name             string   `json:"Name"`
	ParameterVersion *int64   `json:"ParameterVersion,omitempty"`
}
