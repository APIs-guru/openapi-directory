package shared

type UnlabelParameterVersionRequest struct {
	Labels           []string `json:"Labels"`
	Name             string   `json:"Name"`
	ParameterVersion int64    `json:"ParameterVersion"`
}
