package shared

type GetParametersResult struct {
	InvalidParameters []string    `json:"InvalidParameters"`
	Parameters        []Parameter `json:"Parameters"`
}
